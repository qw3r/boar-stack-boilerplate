'use strict';

var ControllerFactory = require('../../lib/controller-factory');

module.exports = ControllerFactory.create(function(router) {

  router.get('/', ControllerFactory.load('main/actions/get'));

});
