const promiseState = require('./promiseState');
const promiseStatus = require('./promiseStatus');
const PromiseStatuses = require('./PromiseStatuses');
const promisePredicates = require('./promisePredicates');

Object.assign(
    module.exports,
    promiseState,
    promiseStatus,
    PromiseStatuses,
    promisePredicates
);
