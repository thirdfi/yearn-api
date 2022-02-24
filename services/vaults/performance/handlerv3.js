const { ETF_STRATEGIES } = require("../../../utils/constant");
const performanceDb = require("../../../models/performance.model");
const contractHelper = require("../../../utils/web3/index");
const dateTimeUtil = require("../../../utils/dateTime");
const pnlUtil = require("../../../utils/pnl");
const delay = require("delay");

const { totalSupply, getPool: poolInUSD, getPricePerFullShare: pricePerFullShare, latestAnswer } = require("../../../utils/web3/function/index");
const cronjobModel = require("../../../models/cronjob.model");
const pnlSeriesModel = require("../../../models/strategy-pnl-series.model");

const { eacAggregatoorProxyContract: chainlinkAbi } = require("../../../config/abi");

const processStrategies = async () => {
    const strategies = contractHelper.getContractsFromDomain();
    
    for (const etf of ETF_STRATEGIES) {
        try {
            // Instantiate contract
            const strategy = strategies["farmer"][etf];

            const {
                abi,
                address,
                network,
                // pnl: pnlSeries, 
                inceptionBlock: startBlock
            } = strategy;

            const vault = await contractHelper.getContract({ abi, address, network });

            const pnlDatas = await performanceDb.findAll(etf);

            let requireRunPNL = false;

            let latestRecord = {};


            if (pnlDatas.length <= 0 || pnlDatas === null || pnlDatas === undefined) {
                const endBlock = await contractHelper.getLatestBlockNumber({ network });

                dates = await pnlUtil.getSearchRange(startBlock, endBlock, network);

                requireRunPNL = true;

            } else {

                latestRecord = pnlDatas[pnlDatas.length - 1];
                let latestRecordDate = dateTimeUtil.formatDate(latestRecord.date);

                // Get today's block number at 12.00 A.M
                const currentDateTime = new Date().getTime();
                const nextUpdateBlock = await pnlUtil.getNextUpdateBlock({ dateTime: currentDateTime, network });; // TODO: get next update block
                let nextUpdateBlockDate = dateTimeUtil.formatDate(nextUpdateBlock[0].date);

                // Check latest record date is equal to next update block date (i.e. today's 12.00 AM utc)
                const isSameDate = latestRecordDate === nextUpdateBlockDate;

                if (!isSameDate) {
                    const latestSyncBlock = latestRecord.block;
                    const endBlock = await contractHelper.getLatestBlockNumber({ network });

                    // Looking for dates the between last updated record block  with latest block 
                    dates = await pnlUtil.getSearchRange(latestSyncBlock, endBlock, network);

                    requireRunPNL = true;
                }

            }

            if (!requireRunPNL) {
                console.log(`[PNL] PNL data up to date ${etf} END at ${new Date().toString()}`);
                continue;
            }

            let basePrice = {}; let inceptionPrice = {};
            let currentPrice = {}; let performance = {};

            const pnlObject = await pnlSeriesModel.getStrategySeries(etf);
            if (pnlObject === undefined || pnlObject.length <= 0) {
                throw (`Missing ${etf} PNL Object in strategy_pnl_series collection`);
            }
            let pnlSeries = pnlObject.series;


            pnlSeries.forEach(p => {
                const attributeName = `${p.db}_inception_price`;
                basePrice[p.db] = latestRecord[attributeName] !== undefined ? latestRecord[attributeName] : "0";
                inceptionPrice[p.db] = latestRecord[attributeName] !== undefined ? latestRecord[attributeName] : "0";
            });


            for (const date of dates) {
                console.log(`reading strategy ${etf} data on ${date.date}`);

                let continueLookForData = true;
                let attemptMade = 0;
                let maxAttemptAllowed = 4;

                let strategyTotalSupply = 0;
                let strategyPoolInUSD = 0;
                let strategyPricePerFullShare = 0;

                while (continueLookForData && attemptMade <= maxAttemptAllowed) {
                    const param = {
                        symbol: etf,
                        contract: vault,
                        blockNumber: date.block
                    };
                    strategyTotalSupply = await totalSupply(param);
                    strategyPoolInUSD = await poolInUSD(param);
                    strategyPricePerFullShare = await pricePerFullShare(param);

                    currentPrice["lp"] = strategyPricePerFullShare;

                    if (parseFloat(basePrice["lp"]) === 0 && parseFloat(currentPrice["lp"]) !== 0) {
                        console.log(`setting inception price`);
                        basePrice["lp"] = currentPrice["lp"];
                        inceptionPrice["lp"] = basePrice["lp"];
                    }

                    continueLookForData = parseFloat(inceptionPrice["lp"]) !== 0
                        && (
                            parseFloat(strategyTotalSupply) === 0 ||
                            parseFloat(strategyPoolInUSD) === 0 ||
                            parseFloat(strategyPricePerFullShare) === 0
                        );

                    // Attempt to get total supply or pool value or price again if inception price is not 0
                    if (continueLookForData) {
                        console.log(`Inception price is non-zero, either total supply / pool / price is 0, attempt to get these value again. `)
                        attemptMade++;
                    }
                }

                const data = {
                    date: date.date,
                    date: date.date,
                    time_stamp: dateTimeUtil.toMillisecondsTimestamp(date.date), // time_stamp: date.timestamp,
                    block: date.block,
                    total_supply: strategyTotalSupply,
                    total_pool_usd: strategyPoolInUSD,
                    lp_token_price_usd: currentPrice["lp"].toString(),
                    lp_inception_price: inceptionPrice["lp"].toString(),
                };

                for (let i = 0; i < pnlSeries.length; i++) {
                    const seriesName = pnlSeries[i].db;

                    // Update for BTC or ETH price
                    if (seriesName !== 'lp') {
                        const { network: chainlinkNetwork, chainlink: chainlinkAddress, decimals: chainlinkDecimals } = pnlSeries[i];
                        const chainlinkContract = await contractHelper.getContract({ abi: chainlinkAbi, address: chainlinkAddress, network: chainlinkNetwork });

                        const chainBlockNumber = date.block;

                        let latestPrice = await latestAnswer({ contract: chainlinkContract, blockNumber: chainBlockNumber });
                        latestPrice = latestPrice / 10 ** chainlinkDecimals;

                        currentPrice[seriesName] = latestPrice;

                        if (currentPrice[seriesName] > 0 && parseFloat(basePrice[seriesName]) === 0) {
                            basePrice[seriesName] = currentPrice[seriesName];
                            inceptionPrice[seriesName] = basePrice[seriesName];
                        }

                        // Add to data
                        data[`${seriesName}_price`] = currentPrice[seriesName].toString();
                        data[`${seriesName}_inception_price`] = inceptionPrice[seriesName].toString();
                        data[`${seriesName}_block`] = chainBlockNumber;
                    }

                    // Performance Calculation
                    performance[seriesName] = pnlUtil.calculatePerformance(basePrice[seriesName], currentPrice[seriesName]);
                    data[`${seriesName}_performance`] = performance[seriesName].toString();
                }

                await performanceDb.add(etf, data);
                console.log(`${etf} Data for ${date.date} saved to db at ${new Date()}.`);
            }

            console.log(`[PNL] Processing strategy ${etf} END at ${new Date()}`);
        } catch (err) {
            console.error(`Error in savePerformance() for ${etf} at ${new Date()}`, err);
        }
    }
}


module.exports.savePerformance = async () => {
  
    const cronjobExecution = await cronjobModel.getPNLCronjob();
    // Quit cronjob if there's any ongoing cronjob
    if (cronjobExecution.inExecution) {
        console.log(`There is an ongoing PNL cronjob execution, skip this turn.`);
        return;
    }

    // Update cronjob execution status = true
    await cronjobModel.updatePNLCronjobExecution(true);

    // Process Strategies
    await processStrategies();

    // Update cronjob execution status = false
    await cronjobModel.updatePNLCronjobExecution(false);
}