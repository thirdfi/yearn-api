const mongo = require("../../../config/db");
const collection = "cdz_strategies";

const findAll = async() => {
    const db = mongo.getDB();
    return await db.collection(collection).find({}).toArray();
}

module.exports = {
    findAll
};