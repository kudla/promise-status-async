const isPromisePending = require('./isPromisePending');
const isPromiseResolved = require('./isPromiseResolved');
const isPromiseRejected = require('./isPromiseRejected');
const isPromiseNotPending = require('./isPromiseNotPending');
const isPromiseNotResolved = require('./isPromiseNotResolved');
const isPromiseNotRejected = require('./isPromiseNotRejected');


Object.assign(
    module.exports,
    isPromisePending,
    isPromiseResolved,
    isPromiseRejected,
    isPromiseNotPending,
    isPromiseNotResolved,
    isPromiseNotRejected
);
