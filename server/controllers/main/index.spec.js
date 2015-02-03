'use strict';

var expect = require('chai').expect;
var MainController = require('./').Controller;
var ControllerFactory = require('./').Factory;
var routerMock = require('../../lib/app/router.mock').create();


describe('Admin main Controller', function () {

  beforeEach(function() {
    this.sandbox.stub(ControllerFactory, 'load').returnsArg(0);
  });

  it('should route GET / to main get action', function() {
    var controller = new MainController();
    controller.bindRouter(routerMock);
    expect(routerMock.get).to.have.been.calledWith('/', 'main/actions/get');
  });


  it('should route GET /healthcheck to healthcheck get action', function() {
    var controller = new MainController();
    controller.bindRouter(routerMock);
    expect(routerMock.get).to.have.been.calledWith('/healthcheck', 'main/actions/healthcheck/get');
  });


  it('should route GET /list to list get action by accept type', function() {
    this.sandbox.stub(ControllerFactory, 'loadByAcceptType').returns('fromControllerFactoryLoadByAcceptType');

    var controller = new MainController();
    controller.bindRouter(routerMock);
    expect(routerMock.get).to.have.been.calledWith('/list', 'fromControllerFactoryLoadByAcceptType');
  });

});
