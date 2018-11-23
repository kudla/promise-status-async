# promise-status-async API

## Table of Contents
* [Constants](#constants)
    + [PromiseStatuses](#promisestatuses)
    + [PROMISE_PENDING](#promise_pending)
    + [PROMISE_RESOLVED](#promise_resolved)
    + [PROMISE_REJECTED](#promise_rejected)
* [Functions](#functions)
    + [promiseStatus](#promiseStatus)
    + [promiseState](#promiseState)
* [Predicates](#predicates)
    + [isPromisePending](#ispromisepending)
    + [isPromiseResolved](#ispromiseresolved)
    + [isPromiseRejected](#ispromiserejected)
    + [isPromiseNotPending](#ispromisenotpending)
    + [isPromiseNotResolved](#ispromisenotresolved)
    + [isPromiseNotRejected](#ispromisenotrejected)

## Constants

### `PromiseStatuses`
```
{
    PROMISE_PENDING: "pending",
    PROMISE_RESOLVED: "resolved",
    PROMISE_REJECTED: "rejected"
}
```
Presents all the possible promise statuses.


### `PROMISE_PENDING`
```js
"pending"
```
Presents status name for `pending` promise.


### `PROMISE_RESOLVED`
```js
"resolved"
```
Presents status name for `resolved` promise.


### `PROMISE_REJECTED`
```js
"rejected"
```
Presents status name for `rejected` promise.


## Functions

### `promiseStatus()`
```js
    async promiseStatus(
        promise: Promise
    ): string // PROMISE_PENDING | PROMISE_RESOLVED | PROMISE_REJECTED
```
Returns an actual status of the promise.


### `promiseState()`
```js
    async promiseState(
        promise: Promise
    ): {
        status: string, // PROMISE_PENDING | PROMISE_RESOLVED | PROMISE_REJECTED
        [value]: any,
        [reason]: any
    }
```
Describes actual state of the promise.


## Predicates

### `isPromisePending()`
```js
    async isPromisePending(
        promise: Promise
    ): boolean
```
Tells whether promise is in `pending` status.


### `isPromiseResolved()`
```js
    async isPromiseResolved(
        promise: Promise
    ): boolean
```
Tells whether promise is in `resolved` status.


### `isPromiseRejected()`
```js
    async isPromiseRejected(
        promise: Promise
    ): boolean
```
Tells whether promise is in `rejected` status.


### `isPromiseNotPending()`
```js
    async isPromiseNotPending(
        promise: Promise
    ): boolean
```
Tells whether promise is in any status different to `pending`.


### `isPromiseNotResolved()`
```js
    async isPromiseNotResolved(
        promise: Promise
    ): boolean
```
Tells whether promise is in any status different to `resolved`.


### `isPromiseNotRejected()`
```js
    async isPromiseNotRejected(
        promise: Promise
    ): boolean
```
Tells whether promise is in any status different to `rejected`.
