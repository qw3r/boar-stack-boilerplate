'use strict';

var ControllerFactory = require('boar-stack').lib.controllerFactory;

module.exports = ControllerFactory.create(function(router) {

  router.get('/', ControllerFactory.load('main/actions/get'));

  router.get('/healthcheck', ControllerFactory.load('main/actions/healthcheck/get'));

  router.get('/list', ControllerFactory.loadByAcceptType('main/actions/list/get'));

});
