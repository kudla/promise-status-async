const {
    isPromiseNotRejected
} = require('../../../lib/predicates');

describe('lib/predicates/isPromiseNotRejected', () => {
    it('should be a function', () => {
        expect(isPromiseNotRejected).to.be.instanceof(Function);
    });

    it('should return true for  pending promise', async () => {
        expect(await isPromiseNotRejected(new Promise(() => {}))).to.be.equal(true);
    });

    it('should return true for resolved promise', async () => {
        expect(await isPromiseNotRejected(Promise.resolve())).to.be.equal(true);
    });

    it('should return false for rejected promise', async () => {
        expect(await isPromiseNotRejected(Promise.reject())).to.be.equal(false);
    });
});