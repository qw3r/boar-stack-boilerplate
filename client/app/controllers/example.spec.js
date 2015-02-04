'use strict';

var ExampleCtr = require('./example');

describe('ExampleController', () => {
    var exampleCtrl;

    beforeEach(() => {
       exampleCtrl = new ExampleCtr();
    });

    it('should initiate variable with value 5', () => {
        expect(exampleCtrl.variable).to.eql(5);
    });
});