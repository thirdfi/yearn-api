module.exports.latestAnswer = async({contract, blockNumber = undefined}) => {
    let latestAnswer = 0;
    try {
    
        latestAnswer = await contract.methods.latestAnswer().call(undefined, blockNumber);

    } catch (err) {

        console.error(`Error in latestAnswer(): `, err);

    } finally {
        return latestAnswer;
    }
    
}