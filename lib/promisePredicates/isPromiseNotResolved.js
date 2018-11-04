const {promiseStatus} = require('../promiseStatus');
const {PROMISE_RESOLVED} = require('../PromiseStatuses');

async function isPromiseNotResolved(promise) {
    const status = await promiseStatus(promise);
    return status !== PROMISE_RESOLVED;
}

module.exports = {
    isPromiseNotResolved
};
