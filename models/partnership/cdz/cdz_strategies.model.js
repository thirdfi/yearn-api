const mongo = require("../../../config/db");
const collection = "cdz_strategies";

const findAll = async(network) => {
    const db = mongo.getDB();
    return await db.collection(collection).find({ chain: network}).toArray();
}

module.exports = {
    findAll
};