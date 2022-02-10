module.exports.balanceOf = async({contract, address, blockNumber = undefined}) => {
    let balance = 0;
    try {
    
        balance = await contract.methods.balanceOf(address).call(undefined, blockNumber);

    } catch (err) {

        console.error(`Error in balanceOf(): `, err);

    } finally {
        return balance;
    }
    
}