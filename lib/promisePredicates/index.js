const {isPromisePending} = require('./isPromisePending');
const {isPromiseResolved} = require('./isPromiseResolved');
const {isPromiseRejected} = require('./isPromiseRejected');
const {isPromiseNotPending} = require('./isPromiseNotPending');
const {isPromiseNotResolved} = require('./isPromiseNotResolved');
const {isPromiseNotRejected} = require('./isPromiseNotRejected');

const PromisePredicates = {
    isPromisePending,
    isPromiseResolved,
    isPromiseRejected,
    isPromiseNotPending,
    isPromiseNotResolved,
    isPromiseNotRejected
};


module.exports = {
    PromisePredicates,
    isPromisePending,
    isPromiseResolved,
    isPromiseRejected,
    isPromiseNotPending,
    isPromiseNotResolved,
    isPromiseNotRejected
};
