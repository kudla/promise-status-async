import {
    PromiseStatuses,
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} from ('./promiseStatuses');

export type PromisePredicate = (Promise) => Promise<boolean>

// export const isPromisePending: PromisePredicate
// export const isPromisePending: PromisePredicate

// const {
//     PromisePredicates,
//     isPromisePending,
//     isPromiseResolved,
//     isPromiseRejected,
//     isPromiseNotPending,
//     isPromiseNotResolved,
//     isPromiseNotRejected
// } = require('./promisePredicates');

// module.exports = {
//     promiseState,
//     promiseStatus,

//     PromiseStatuses,
//     PROMISE_PENDING,
//     PROMISE_RESOLVED,
//     PROMISE_REJECTED,

//     PromisePredicates,
//     isPromisePending,
//     isPromiseResolved,
//     isPromiseRejected,
//     isPromiseNotPending,
//     isPromiseNotResolved,
//     isPromiseNotRejected
// };

// import { BrotliOptions, InputType, CompressCallback } from 'zlib'
// import { stringify as JSONBstringify, parse as JSONBparse } from 'json-buffer'

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
// type PromiseState<T> = {

// }
// type promiseState<T> = (Promise<T>) => Promise<>

// type Serialize<T> = (source: InputType) => T
// type Deserialize<T> = (source: CompressResult) => T

// declare function createCompress<
//   SerializeResult = ReturnType<typeof JSONBstringify>,
//   DeserializeResult = ReturnType<typeof JSONBparse>
// >(
//   options?: {
//     enable?: boolean,
//     serialize?: Serialize<SerializeResult>,
//     deserialize?: Deserialize<DeserializeResult>,
//     iltorb?: any,
//     compressOptions?: BrotliOptions,
//     decompressOptions?: BrotliOptions
//   }
// ): {
//   serialize: Serialize<SerializeResult>,
//   deserialize: Deserialize<DeserializeResult>,
//   compress: (data: InputType, optioins?: BrotliOptions) => CompressResult
//   decompress: (data: InputType, optioins?: BrotliOptions) => DeserializeResult
// }

// declare namespace createCompress {
//   const stringify: typeof JSONBstringify
//   const parse: typeof JSONBparse
// }

// export default createCompress

