const contractHelper = require("../utils/web3/index");
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const getSearchRange = async (firstBlock, lastBlock, network) => {
    const {
        getBlockInfo,
        getEvery
    } = contractHelper;


    let firstTimestamp = (await getBlockInfo({blockNumber: firstBlock, network })).timestamp;
    firstTimestamp = firstTimestamp + (86400 - (firstTimestamp % 86400));
    firstTimestamp *= 1000;

    let lastTimestamp = (await getBlockInfo({blockNumber: lastBlock, network})).timestamp;
    lastTimestamp = lastTimestamp - (lastTimestamp % 86400);
    lastTimestamp *= 1000;

    const days = await getEvery({
        duration: "days",
        start: firstTimestamp,
        end: lastTimestamp,
        every: 1,
        after: true,
        network
    });

    for(const d of days) {
        console.log(`date: ${d.date}, block: ${d.block}`);
    }
    
    return days;
}

const getNextUpdateBlock = async({dateTime, network}) => {
    const { 
        getBlockByTimeline
    } = contractHelper;

    let nearestDateTime = dateTime - (dateTime % 86400000); // round down to midnight]

    const block = await getBlockByTimeline({timeline: nearestDateTime, network});
    
    return [block];
}

const calculatePerformance = (initial, current) => {
    return initial == 0 ? 0 : current / initial - 1;
}

const getTokenPrice = async(tokenId, date) => {
    try {
        const data = await CoinGeckoClient.coins.fetchHistory(tokenId, {
            date: date,
        });

        if (Object.keys(data.data).length != 0) {
            return data.data["market_data"]["current_price"]["usd"];
        } else {
            return 1;
        }
    } catch (err){
        console.error(`[performance/handlerv2] getTokenPrice() ${tokenId}: `, err);
    }
}

module.exports = {
    getSearchRange,
    getNextUpdateBlock,
    calculatePerformance,
    getTokenPrice
}