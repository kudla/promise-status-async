const {promiseStatus} = require('../../lib/promiseStatus');

describe('lib/promiseStatus', () => {
    it('should be a function', () => {
        expect(promiseStatus).to.be.instanceof(Function);
    });
});