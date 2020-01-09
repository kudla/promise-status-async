const {promiseState} = require('./promiseState');
const {promiseStatus} = require('./promiseStatus');
const {
    PromiseStatuses,
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} = require('./promiseStatuses');

const {
    PromisePredicates,
    isPromisePending,
    isPromiseResolved,
    isPromiseRejected,
    isPromiseNotPending,
    isPromiseNotResolved,
    isPromiseNotRejected
} = require('./promisePredicates');

module.exports = {
    promiseState,
    promiseStatus,

    PromiseStatuses,
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED,

    PromisePredicates,
    isPromisePending,
    isPromiseResolved,
    isPromiseRejected,
    isPromiseNotPending,
    isPromiseNotResolved,
    isPromiseNotRejected
};
