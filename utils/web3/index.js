const Web3 = require("web3");
const constant = require("../constant");
const EthDater = require('../../services/vaults/apy/save/ethereum-block-by-date');
const { testContracts, mainContracts } = require("../../config/serverless/domain");

const archiveNode = {
    [constant.ETHEREUM] : process.env.ARCHIVENODE_ENDPOINT,
    [constant.POLYGON]: process.env.POLYGON_ARCHIVENODE_ENDPOINT,
    [constant.BSC]: process.env.BSC_ARCHIVENODE_ENDPOINT,
    [constant.AVAX]: process.env.AVALANCHE_ARCHIVENODE_ENDPOINT
}

const web3Object = {
    [constant.ETHEREUM]: undefined, 
    [constant.POLYGON]: undefined,
    [constant.BSC]: undefined,
    [constant.AVAX]: undefined
}

const daterBlocks = {
    [constant.ETHEREUM]: undefined, 
    [constant.POLYGON]: undefined,
    [constant.BSC]: undefined,
    [constant.AVAX]: undefined
}

const instantiateWeb3 = async(network) => {
    if(network === null || network === undefined) {
        throw(`Missing network`)
    }
    
    if(web3Object[network] !== undefined) {
        return web3Object[network];
    }
    const archiveNodeUrl = archiveNode[network];
    web3Object[network] = new Web3(archiveNodeUrl);

    return web3Object[network];
}

const instantiateEthDater = async(network) => {
    if(daterBlocks[network] !== undefined) {
        return daterBlocks[network];
    }
    
    const web3 = await instantiateWeb3(network);
    daterBlocks[network] = new EthDater(web3, 3000);
  
    return daterBlocks[network];
}

const getContract = async({ abi, address, network}) => {
    try {
        const web3 = await instantiateWeb3(network);
        return new web3.eth.Contract(abi, address);
    } catch (err) {
        console.log("[web3] Error in getContract(): ", err);
    }
}

const getLatestBlockNumber = async({network}) => {
    try {
        const web3 = await instantiateWeb3(network);
        return await web3.eth.getBlockNumber();
    } catch (err) {
        console.log('Error in getLatestBlockNumber()', err);
    }
}

const getBlockInfo = async({blockNumber, network}) => {
    try {
        if(!blockNumber || blockNumber === undefined) {
            throw(`Missing block number`);
        }
        const web3 = await instantiateWeb3(network);
        return await web3.eth.getBlock(blockNumber);
    } catch (err) {
        console.log('Error in getLatestBlockNumber()', err);
    }
}

const getBlockByTimeline = async({timeline, network}) => {
    try {
        const blocks = await instantiateEthDater(network);
        const dates = await blocks.getDate(timeline);
        return dates;
    } catch (err) {
        console.log('Error in getBlockByTimeline()', err);
    }
}

const getBlockNumberByTimeline = async({timeline, network}) => {
    try {
        const block = await getBlockByTimeline({ timeline, network});
        return block.block;
    } catch (err) {
        console.log('Error in getBlockNumberByTimeline()', err);
    }
}

const getEvery = async({duration, start, end, every, after, network}) => {
    try {
        const blocks = await instantiateEthDater(network);
        const dates = await blocks.getEvery(
            duration,
            start, 
            end,
            every, 
            after
        );
        return dates;
    } catch (err) {
        console.log('Error in getEvery()', err);
    }
}


// Get contracts from domain.js based on environment
const getContractsFromDomain = () => {
    return (process.env.PRODUCTION !== null && process.env.PRODUCTION != "")
      ? mainContracts
      : testContracts;
}

module.exports = {
    getContract,
    getLatestBlockNumber,
    getBlockByTimeline,
    getBlockNumberByTimeline,
    getEvery,
    getBlockInfo,
    getContractsFromDomain,
    instantiateWeb3
}
