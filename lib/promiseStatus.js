const {promiseState} = require('./promiseState');

async function promiseStatus(promise) {
    const {status} = await promiseState(promise);
    return status;
}

module.exports = {
    promiseStatus
};
