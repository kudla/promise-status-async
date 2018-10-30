const {
    isPromisePending
} = require('../../../lib/promisePredicates');

describe('lib/promisePredicates/isPromisePending', () => {
    it('should be a function', () => {
        expect(isPromisePending).to.be.instanceof(Function);
    });

    it('should return true for  pending promise', async () => {
        expect(await isPromisePending(new Promise(() => {}))).to.be.equal(true);
    });

    it('should return false for resolved promise', async () => {
        expect(await isPromisePending(Promise.resolve())).to.be.equal(false);
    });

    it('should return false for rejected promise', async () => {
        expect(await isPromisePending(Promise.reject())).to.be.equal(false);
    });
});
