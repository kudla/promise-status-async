const {
    isPromiseRejected
} = require('../../../lib/promisePredicates');

describe('lib/promisePredicates/isPromiseRejected', () => {
    it('should be a function', () => {
        expect(isPromiseRejected).to.be.instanceof(Function);
    });

    it('should return false for  pending promise', async () => {
        expect(await isPromiseRejected(new Promise(() => {}))).to.be.equal(false);
    });

    it('should return false for resolved promise', async () => {
        expect(await isPromiseRejected(Promise.resolve())).to.be.equal(false);
    });

    it('should return true for rejected promise', async () => {
        expect(await isPromiseRejected(Promise.reject())).to.be.equal(true);
    });
});