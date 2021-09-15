import {
    PromiseStatuses,
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} from ('./promiseStatuses');

export type PromisePredicate = (Promise) => Promise<boolean>

export enum PromiseStatus {
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
}

export type PromisePendingState = {
    status: PromiseStatus.PROMISE_PENDING
}

export type PromiseResolvedState<T = any> = {
    status: PromiseStatus.PROMISE_RESOLVED,
    value: T
}

export type PromiseRejectedState<T = any> = {
    status: PromiseStatus.PROMISE_REJECTED,
    reason: T
}

export type PromiseState<T = any, R = any> = PromisePendingState | PromiseResolvedState<T> | PromiseRejectedState<R>
export declare const promiseState: <T = any, R = any>(promise: Promise<T>) => PromiseState<T, R>
export declare const promiseStatus: <T>(promise: Promise<T>) => PromiseStatus

declare module 'promise-status-async' {
    const PROMISE_PENDING: PromiseStatus.PROMISE_PENDING
    const PROMISE_RESOLVED: PromiseStatus.PROMISE_RESOLVED
    const PROMISE_REJECTED: PromiseStatus.PROMISE_REJECTED
    const PromiseStatuses: {
        PROMISE_PENDING: PromiseStatus.PROMISE_PENDING
        PROMISE_RESOLVED: PromiseStatus.PROMISE_RESOLVED
        PROMISE_REJECTED: PromiseStatus.PROMISE_REJECTED
    }

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
