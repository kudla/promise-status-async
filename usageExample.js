const {
    PromiseStatuses,
    PROMISE_RESOLVED,
    promiseStatus,
    promiseState,
    isPromiseResolved,
    isPromiseNotRejected
} = require('promise-status-async');

const pendingPromise = new Promise(() => {});
const resolvedPromise = Promise.resolve('some value');
const rejectedPromise = Promise.reject('some reason');

(async function usageExample () {
    console.log(await promiseStatus(pendingPromise));
    // pending

    console.log(await promiseStatus(rejectedPromise) === PromiseStatuses.PROMISE_REJECTED);
    // true

    console.log(await promiseStatus(resolvedPromise) === PROMISE_RESOLVED);
    // true

    console.log(await promiseState(resolvedPromise));
    // {status: "resolved", value: "some value"}

    console.log(await isPromiseResolved(pendingPromise));
    // false

    console.log(await isPromiseNotRejected(resolvedPromise));
    // true
})();
