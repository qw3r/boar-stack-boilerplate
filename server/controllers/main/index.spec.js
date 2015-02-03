'use strict';

var expect = require('chai').expect;
var MainController = require('./').Controller;
var ControllerFactory = require('./').Factory;
var routerMock = require('../../lib/app/router.mock').create();


describe('Admin main Controller', function () {

  beforeEach(function() {
    this.sandbox.stub(ControllerFactory, 'load').returnsArg(0);
  });

  it('should route GET /admin/list to admin list get action', function() {
    var controller = new MainController();
    controller.bindRouter(routerMock);
    expect(routerMock.get).to.have.been.calledWith('/', 'main/actions/get');
  });

});
