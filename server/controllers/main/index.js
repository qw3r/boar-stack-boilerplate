'use strict';

var ControllerFactory = require('boar-stack').lib.controllerFactory;

module.exports = ControllerFactory.create(function(router) {

  router.get('/', ControllerFactory.load('main/actions/get'));

  router.get('/healthcheck', ControllerFactory.load('main/actions/healthcheck/get'));

  router.get('/list', ControllerFactory.loadByAcceptType('main/actions/list/get'));

  router.get('/chart', ControllerFactory.loadByAcceptType('main/actions/chart/get'));

  router.get('/sell-statistics', ControllerFactory.load('main/actions/chart/getData'));

});
