const cdzStrategiesModel = require("../../../models/partnership/cdz/cdz_strategies.model");
const { proccessingVault } = require("../../vaults/all/handler");
const constant = require("../../../utils/constant");
const util = require("util");

const PARTNER = { 
    CDZ : "cdz",
}

const getStrategiesModel = (partner) => {
    switch(partner){
        case PARTNER.CDZ: 
            return cdzStrategiesModel;
        default: 
            return null;
    } 
}


const findStrategies = async(req,res) => {
    let strategyList = [];

    try {
        const partner = req.params.partner;

        if(partner === undefined || partner === null || partner === "") {
            throw(`Partner is undefined`);
        }

        let chosenNetwork = req.params.network;
        if(chosenNetwork === undefined || chosenNetwork === null || chosenNetwork === "") {
            chosenNetwork = "bscMain";
        }   
    
        const strategiesModels = getStrategiesModel(partner);
        if(strategiesModels === null) {
            throw(`Unable to find partner model`);
        }
        strategyList = await strategiesModels.findAll(chosenNetwork);
       
        if(strategyList.length > 0) {
            const strategyKeys = strategyList.map(s => s.symbol);
         
            const network = constant.BSC;

            const vaultInfos = await proccessingVault({ vaults: strategyKeys, selectedNetwork: network });
            if(vaultInfos !== undefined && vaultInfos !== null) {
                finalResult = strategyList.map(s => {
                    const strategyId  = s.symbol;
                    const vaultInfo = vaultInfos[strategyId];

                    let objToAppend = {};
                    if(vaultInfo !== undefined) {
                        objToAppend = {
                            tvl: typeof vaultInfo.tvl.tvl === "string" ? parseFloat(vaultInfo.tvl.tvl) : vaultInfo.tvl.tvl ,
                            pnl: typeof vaultInfo.pnl === "string" ? parseFloat(vaultInfo.pnl) : vaultInfo.pnl,
                            asset_distribution: vaultInfo.asset_distribution,
                            asset_allocation: vaultInfo.asset_allocation ? vaultInfo.asset_allocation : null,
                            leverageRatio: vaultInfo.leverageRatio ? vaultInfo.leverageRatio : 0
                        }
                    }

                    delete s._id;

                    return { ...s , ...objToAppend};
                })

                strategyList = finalResult
            }
        }

        
    } catch (err) {
        console.error(`Error in [cdz/api/findStrategies]: `, err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send({
            data: strategyList
        })
    }   
}

module.exports = {
    findStrategies
}