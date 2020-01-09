const {
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} = require('./promiseStatuses');

const pendingState = {
    status: PROMISE_PENDING
};

function promiseState(promise) {
    return Promise.race([promise, pendingState])
        .then(
            value => (value === pendingState
                ? value
                : {
                    status: PROMISE_RESOLVED,
                    value
                }),
            reason => ({
                status: PROMISE_REJECTED,
                reason
            })
        );
}

module.exports = {
    promiseState
};
