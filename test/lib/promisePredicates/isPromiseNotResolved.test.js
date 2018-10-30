const {
    isPromiseNotResolved
} = require('../../../lib/promisePredicates');

describe('lib/promisePredicates/isPromiseNotResolved', () => {
    it('should be a function', () => {
        expect(isPromiseNotResolved).to.be.instanceof(Function);
    });

    it('should return true for pending promise', async () => {
        expect(await isPromiseNotResolved(new Promise(() => {}))).to.be.equal(true);
    });

    it('should return false for resolved promise', async () => {
        expect(await isPromiseNotResolved(Promise.resolve())).to.be.equal(false);
    });

    it('should return true for rejected promise', async () => {
        expect(await isPromiseNotResolved(Promise.reject())).to.be.equal(true);
    });
});
