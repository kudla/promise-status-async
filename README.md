# promise-status-async

## Install
```bash
npm install promise-status-async
```

## Usage
```js
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
```

## API

### Constants
#### PromiseStatuses
```
{
    PROMISE_PENDING: "pending",
    PROMISE_RESOLVED: "resolved",
    PROMISE_REJECTED: "rejected"
}
```

#### PROMISE_PENDING
`"pending"`

#### PROMISE_RESOLVED
`"resolved"`

#### PROMISE_REJECTED
`"rejected"`

### Functions

#### promiseStatus()
```js
    async promiseStatus(
        promise: Promise
    ): string // PROMISE_PENDING | PROMISE_RESOLVED | PROMISE_REJECTED
```

#### promiseState()
```js
    async promiseState(
        promise: Promise
    ): {
        status: string, // PROMISE_PENDING | PROMISE_RESOLVED | PROMISE_REJECTED
        [value]: any,
        [reason]: any
    }
```
#### isPromisePending()
```js
    async isPromisePending(
        promise: Promise
    ): boolean
```
#### isPromiseResolved()
```js
    async isPromiseResolved(
        promise: Promise
    ): boolean
```
#### isPromiseRejected()
```js
    async isPromiseRejected(
        promise: Promise
    ): boolean
```
#### isPromiseNotPending()
```js
    async isPromiseNotPending(
        promise: Promise
    ): boolean
```
#### isPromiseNotResolved()
```js
    async isPromiseNotResolved(
        promise: Promise
    ): boolean
```
#### isPromiseNotRejected()
```js
    async isPromiseNotRejected(
        promise: Promise
    ): boolean
```
