const {promiseState} = require('../../lib/promiseState');
const {
    PROMISE_PENDING,
    PROMISE_RESOLVED,
    PROMISE_REJECTED
} = require('../../lib/promiseStatuses');

describe('lib/promiseState', () => {
    it('should be a function', () => {
        expect(promiseState).to.be.instanceof(Function);
    });

    it('should resolve pending state', async () => {
        const state = await promiseState(new Promise(() => {}));
        expect(state).to.deep.equal({status: PROMISE_PENDING});
    });

    it('should resolve resolved state', async () => {
        const value = {some: 'value'};
        const state = await promiseState(Promise.resolve(value));

        expect(state, 'state structure').to.deep.equal({status: PROMISE_RESOLVED, value});
        expect(state.value, 'resolved value').to.equal(value);
    });

    it('should resolve rejected state', async () => {
        const reason = {some: 'reason'};
        const state = await promiseState(Promise.reject(reason));

        expect(state, 'state structure').to.deep.equal({status: PROMISE_REJECTED, reason});
        expect(state.reason, 'rejection reason').to.equal(reason);
    });

    it('should resolve sync values', async () => {
        const value = {some: 'value'};
        const state = await promiseState(value);

        expect(state, 'state structure').to.deep.equal({status: PROMISE_RESOLVED, value});
        expect(state.value, 'resolved value').to.equal(value);
    });
});
