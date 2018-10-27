const promiseStatus = require('./lib/promiseStatus');
const promiseStatuses = require('./lib/promiseStatuses');

Object.assign(
    module.exports,
    promiseStatus,
    promiseStatuses
);