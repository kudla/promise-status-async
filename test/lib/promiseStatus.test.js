const {promiseStatus} = require('../../lib/promiseStatus');
const {
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} = require('../../lib/promiseStatuses');

describe('lib/promiseStatus', () => {
    it('should be a function', () => {
        expect(promiseStatus).to.be.instanceof(Function);
    });

    it('should resovle pending status', async () => {
        const result = await promiseStatus(new Promise(() => {}));
        expect(result).to.deep.equal({status: PROMISE_PENDING});
    });

    it('should resovle resolved status', async () => {
        const value = {some: 'value'};
        const result = await promiseStatus(Promise.resolve(value));

        expect(result, 'result structure').to.deep.equal({status: PROMISE_RESOLVED, value});
        expect(result.value, 'resolved value').to.equal(value);
    });

    it('should resovle rejected status', async () => {
        const reason = {some: 'value'};
        const result = await promiseStatus(Promise.reject(reason));

        expect(result, 'result structure').to.deep.equal({status: PROMISE_REJECTED, reason});
        expect(result.reason, 'rejection reason').to.equal(reason);
    });
});