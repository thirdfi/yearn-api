const { totalSupply } = require("./totalSupply");
const { getPool } = require("./pool");
const { getPricePerFullShare } = require("./price");
const { balanceOf } = require("./balance");
const { latestAnswer } = require("./latestAnswer");

module.exports = {
    totalSupply,
    getPool,
    getPricePerFullShare,
    balanceOf,
    latestAnswer
}