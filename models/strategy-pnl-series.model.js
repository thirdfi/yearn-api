const mongo = require("../config/db");
const collection = 'strategy_pnl_series';

const getStrategySeries = async(symbol) => {
    try { 
        const db = mongo.getDB();

        let strategies = await db.collection(collection).findOne({symbol});
        return strategies;

    } catch (err) { 
        console.error(`Error in getStrategySeries() : `, err);
    }
}

module.exports = {
    getStrategySeries
}