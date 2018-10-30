async function promiseState(promise) {
    return Promise.race([
        promise
            .then(
                value => ({
                    status: 'resolved',
                    value
                }),
                reason => ({
                    status: 'rejected',
                    reason
                })
            ),
        Promise.resolve()
            .then(() => ({status: 'pending'}))
    ]);
}

module.exports = {
    promiseState
};
