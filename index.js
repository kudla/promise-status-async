const promiseState = require('./lib/promiseState');
const promiseStatus = require('./lib/promiseStatus');
const promiseStatuses = require('./lib/promiseStatuses');
const promisePredicates = require('./lib/promisePredicates');

Object.assign(
    module.exports,
    promiseState,
    promiseStatus,
    promiseStatuses,
    promisePredicates
);
