'use strict';

var sinon = require('sinon');

var RouterMock = function() {
  this.get = sinon.stub();
  this.post = sinon.stub();
  this.put = sinon.stub();
  this.patch = sinon.stub();
};

RouterMock.create = function() {
  return new RouterMock;
};

module.exports = RouterMock;
