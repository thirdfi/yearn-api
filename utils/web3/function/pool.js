const { toWei } = require("../convertUnit");

const poolFunctionName = {
    daoSTO: "getTotalValueInPool",
    bnb2x: "getNavInUSD",
    daoMPT: "getValueInPool"
}

// Pool value returned in 6 decimals for these strategies
const strategyWithSixDecimalPool =  ["daoCDV", "daoELO", "daoCUB"];

const getPool = async({symbol, contract, blockNumber = undefined}) => {
    let pool = 0;
    try {
        // For special case
        let functionName = poolFunctionName[symbol];
        let params;

        if(functionName === undefined) {
            functionName = "getAllPoolInUSD";
        }

        if(["daoMVF"].includes(symbol)) {
            pool = await contract.methods[functionName](false).call(undefined, blockNumber);
        } else {
            pool = await contract.methods[functionName]().call(undefined, blockNumber);
        }
        
        if(strategyWithSixDecimalPool.includes(symbol)) {
            pool = await toWei({amount: pool, decimal: 12})
        }

    } catch (err) {

        console.error(`Error in getPool(): `, err);

    } finally {

        // Pool returned are always in 18 decimals
        return pool;

    }
    
}

module.exports = {
    getPool,
    poolFunctionName
}