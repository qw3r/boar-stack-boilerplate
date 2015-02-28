'use strict';

var sinon = require('sinon');
var renderSpy = require('js-stack.mocks').render;
var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiSubset = require('chai-subset');
var chaiAsPromised = require('chai-as-promised');
var mongoose = require('mongoose');
var config = require('./config');

before(function () {
  chai.use(chaiAsPromised);
  chai.use(chaiSubset);
  chai.use(sinonChai);

  sinon.stub.returnsWithResolve = function (data) {
    return this.returns(Promise.resolve(data));
  };

  sinon.stub.returnsWithReject = function (error) {
    return this.returns(Promise.reject(error));
  };
});


beforeEach(function (done) {
  this.sandbox = sinon.sandbox.create();
  this.renderSpy = renderSpy;
  this.renderSpy.attach();
  mongoose.connect(config.mongooseUri + '-test', done);
});


afterEach(function (done) {
  this.sandbox.restore();
  this.renderSpy.restore();
  mongoose.disconnect(done);
});
