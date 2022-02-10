const mongo = require("../config/db");
const collection = 'cronjobs';

const getPNLCronjob = async() => {
    try {
        const db = mongo.getDB();
        const cronjob = await db.collection(collection).findOne({
            name: "pnl"
        });
        return cronjob;
    } catch(err) {
        console.error(`Error in getPNLCronjob() ${symbol}:`, err);
    }
}

const updatePNLCronjobExecution = async(inExecution) => {
    try {
        const db = mongo.getDB();
        
        await db.collection(collection).updateOne({
            name: "pnl"
        }, { $set: { inExecution } });

    } catch(err) {
        console.error(`Error in updatePNLCronjobExecution() ${symbol}:`, err);
    }
}

const updateCronjobNotInExecution = async() => {
    try {
        const db = mongo.getDB();

        await db.collection(collection).updateMany({}, { $set: { inExecution: false  } });

    } catch(err) {
        console.error(`Error in updateCronjobNotInExecution() :`, err);
    }
}

module.exports = {
    getPNLCronjob,
    updatePNLCronjobExecution,
    updateCronjobNotInExecution
}