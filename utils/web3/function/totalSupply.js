module.exports.totalSupply = async({symbol, contract, blockNumber = undefined}) => {
    let totalSupply = 0;
    try {
    
        totalSupply = await contract.methods.totalSupply().call(undefined, blockNumber);

    } catch (err) {

        console.error(`Error in totalSupply(): `, err);

    } finally {

        // Pool returned are always in 18 decimals
        return totalSupply;

    }
    
}
