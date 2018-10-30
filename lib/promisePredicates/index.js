const isPromisePending = require('./isPromisePending');
const isPromiseResolved = require('./isPromiseResolved');
const isPromiseRejected = require('./isPromiseRejected');
const isPromiseNotPending = require('./isPromiseNotPending');
const isPromiseNotResolved = require('./isPromiseNotResolved');
const isPromiseNotRejected = require('./isPromiseNotRejected');

const PromisePredicates = Object.assign(
    {},
    isPromisePending,
    isPromiseResolved,
    isPromiseRejected,
    isPromiseNotPending,
    isPromiseNotResolved,
    isPromiseNotRejected
);


Object.assign(
    module.exports,
    PromisePredicates,
    {PromisePredicates}
);
