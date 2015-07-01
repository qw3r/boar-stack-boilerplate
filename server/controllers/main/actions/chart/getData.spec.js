'use strict';

var sellModel = require('../../../../models/sellStatistic');
var expect = require('chai').expect;
var FakeContext = require('boar-stack-mocks').context;
var getData = require('./getData');
var sinon = require('sinon');
var bluebird = require('bluebird');


describe('Main Controller Chart GET Data Action', function(){
  beforeEach(function() {
    sinon.stub(sellModel, 'findOrdered');
  });

  afterEach(function() {
    sellModel.findOrdered.restore();
  });

  it('should respond with correct sell statistics format', function* () {
    var sells = [{creationDate: new Date('2015-05-05'), value: 1000}];
    sellModel.findOrdered.returns(bluebird.resolve(sells));
    var context = FakeContext.create();

    context.request = {
      query: {
        dateFilter: new Date('2015-05-05')
      }
    };

    yield getData.call(context);

    expect(sellModel.findOrdered).to.have.been.called;
    expect(context.body).to.eql(sells);
  });
});
