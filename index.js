const promiseStatus = require('./lib/promiseStatus');
const promiseStatuses = require('./lib/promiseStatuses');
const predicates = require('./lib/predicates');

Object.assign(
    module.exports,
    promiseStatus,
    promiseStatuses,
    predicates
);
