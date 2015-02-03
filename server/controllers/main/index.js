'use strict';

var ControllerFactory = require('../../lib/controller-factory');

module.exports = ControllerFactory.create(function(router) {

  router.get('/', ControllerFactory.load('main/actions/get'));

  router.get('/list', ControllerFactory.loadByAcceptType('main/actions/list/get'));

});
