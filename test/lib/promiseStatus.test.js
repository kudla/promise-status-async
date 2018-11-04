const {promiseStatus} = require('../../lib/promiseStatus');
const {
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} = require('../../lib/PromiseStatuses');

describe('lib/promiseStatus', () => {
    it('should be a function', () => {
        expect(promiseStatus).to.be.instanceof(Function);
    });

    it('should resovle pending state', async () => {
        const status = await promiseStatus(new Promise(() => {}));
        expect(status).to.equal(PROMISE_PENDING);
    });

    it('should resovle resolved state', async () => {
        const value = {some: 'value'};
        const status = await promiseStatus(Promise.resolve(value));

        expect(status).to.equal(PROMISE_RESOLVED);
    });

    it('should resovle rejected state', async () => {
        const reason = {some: 'value'};
        const status = await promiseStatus(Promise.reject(reason));

        expect(status).to.equal(PROMISE_REJECTED);
    });
});
