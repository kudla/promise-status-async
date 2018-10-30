const {
    isPromiseNotPending
} = require('../../../lib/promisePredicates');

describe('lib/promisePredicates/isPromiseNotPending', () => {
    it('should be a function', () => {
        expect(isPromiseNotPending).to.be.instanceof(Function);
    });

    it('should return false for  pending promise', async () => {
        expect(await isPromiseNotPending(new Promise(() => {}))).to.be.equal(false);
    });

    it('should return true for resolved promise', async () => {
        expect(await isPromiseNotPending(Promise.resolve())).to.be.equal(true);
    });

    it('should return true for rejected promise', async () => {
        expect(await isPromiseNotPending(Promise.reject())).to.be.equal(true);
    });
});