import {
    PromiseStatuses,
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} from ('./promiseStatuses');

declare module 'promise-status-async' {
    export type PromisePredicate = (Promise) => Promise<boolean>

    export declare enum PromiseStatuses {
        PROMISE_PENDING = PROMISE_PENDING,
        PROMISE_RESOLVED = PROMISE_RESOLVED,
        PROMISE_REJECTED = PROMISE_REJECTED
    }

    export type PromisePendingState = {
        status: PromiseStatuses.PROMISE_PENDING
    }

    export type PromiseResolvedState<T = any> = {
        status: PromiseStatuses.PROMISE_RESOLVED,
        value: T
    }

    export type PromiseRejectedState<T = any> = {
        status: PromiseStatuses.PROMISE_REJECTED,
        reason: T
    }

    export type PromiseState<T = any, R = any> = PromisePendingState | PromiseResolvedState<T> | PromiseRejectedState<R>
    export declare const promiseState: <T = any, R = any>(promise: T | Promise<T>) => PromiseState<T, R>
    export declare const promiseStatus: <T>(promise: T | Promise<T>) => PromiseStatuses

    const PROMISE_PENDING: PromiseStatuses.PROMISE_PENDING
    const PROMISE_RESOLVED: PromiseStatuses.PROMISE_RESOLVED
    const PROMISE_REJECTED: PromiseStatuses.PROMISE_REJECTED

    const PromisePredicates: {
        isPromisePending: PromisePredicate,
        isPromiseResolved: PromisePredicate,
        isPromiseRejected: PromisePredicate,
        isPromiseNotPending: PromisePredicate,
        isPromiseNotResolved: PromisePredicate,
        isPromiseNotRejected: PromisePredicate
    }

    const isPromisePending: PromisePredicate
    const isPromiseResolved: PromisePredicate
    const isPromiseRejected: PromisePredicate
    const isPromiseNotPending: PromisePredicate
    const isPromiseNotResolved: PromisePredicate
    const isPromiseNotRejected: PromisePredicate

    const promiseState: promiseState
    const promiseStatus: promiseStatus
}
