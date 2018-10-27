const {expect, use} = require('chai');
const chaiAsPromised = require('chai-as-promised');

use(chaiAsPromised);

Object.assign(
    global,
    {
        expect
    }
);
