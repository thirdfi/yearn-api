const { totalSupply: getTotalSupply } = require("./totalSupply");
const { getPool } = require("./pool");
const { fromWei } = require("../convertUnit");

// These strategies doesn't provide getPricePerFullShare() in smart contract, manual calculation required
const olderStrategies = ["daoCDV", "daoSTO", "daoELO", "daoCUB", "daoMPT", "bnb2x"];

module.exports.getPricePerFullShare = async({symbol, contract, blockNumber = undefined}) => {
    let price = 0;

    try {
        if(olderStrategies.includes(symbol)) {
            const totalSupply = await getTotalSupply({ symbol, contract, blockNumber});
            const pool = await getPool({ symbol, contract, blockNumber });
    
            price = pool / totalSupply;

            price = isNaN(price) ? 0 : price;
            
        } else {
            price = await contract.methods.getPricePerFullShare().call(undefined, blockNumber);
            price = await fromWei({ amount: price, decimal: 18 });
        }

    } catch(err) {
        console.error(`Error in getPricePerFullShare(): `, err);
    } finally { 
        return price;
    }
}