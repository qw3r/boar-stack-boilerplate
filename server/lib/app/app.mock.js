'use strict';

var sinon = require('sinon');

var AppMock = function() {
  this.use = sinon.stub();
};

AppMock.create = function() {
  return new AppMock;
};

module.exports = AppMock;
