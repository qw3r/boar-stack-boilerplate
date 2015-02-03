'use strict';

var angular = require('angular');
var Controller = require('./controllers/example');

angular
  .module('boilerplate', [])
  .controller('ExampleController', [Controller]);

angular.bootstrap(document, ['boilerplate']);