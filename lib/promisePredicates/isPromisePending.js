const {promiseStatus} = require('../promiseStatus');
const {PROMISE_PENDING} = require('../PromiseStatuses');

async function isPromisePending(promise) {
    const status = await promiseStatus(promise);
    return status === PROMISE_PENDING;
}

module.exports = {
    isPromisePending
};
