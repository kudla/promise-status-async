const {
    isPromiseResolved
} = require('../../../lib/promisePredicates');

describe('lib/promisePredicates/isPromiseResolved', () => {
    it('should be a function', () => {
        expect(isPromiseResolved).to.be.instanceof(Function);
    });

    it('should return false for  pending promise', async () => {
        expect(await isPromiseResolved(new Promise(() => {}))).to.be.equal(false);
    });

    it('should return true for resolved promise', async () => {
        expect(await isPromiseResolved(Promise.resolve())).to.be.equal(true);
    });

    it('should return false for rejected promise', async () => {
        expect(await isPromiseResolved(Promise.reject())).to.be.equal(false);
    });
});