const web3Helper = require("./index");
const constant = require("../constant");

const unitLabel = {
    6: "mwei",
    9: "gwei",
    12: "microether",
    18: "ether"
}

module.exports.fromWei = async({ amount, decimal = 18 }) => {
    const units = unitLabel[decimal];
    const web3 = await web3Helper.instantiateWeb3(constant.ETHEREUM);
    const result = web3.utils.fromWei(amount, units);
    return result;
}

module.exports.toWei = async({ amount, decimal = 18 }) => {
    const units = unitLabel[decimal];
    const web3 = await web3Helper.instantiateWeb3(constant.ETHEREUM);
    const result = web3.utils.toWei(amount, units);
    return result;
}