const {promiseStatus} = require('../promiseStatus');
const {PROMISE_PENDING} = require('../promiseStatuses');

async function isPromiseNotPending(promise) {
    const status = await promiseStatus(promise);
    return status !== PROMISE_PENDING;
}

module.exports = {
    isPromiseNotPending
};
