'use strict';

var angular = require('angular');
var Controller = require('./controllers/example');

angular
  .module('boilerplate', [])
  .controller('ExampleController', ['$http', Controller])
  .run(($http) => { $http.defaults.headers.get = {'Accept': 'application/json'} })

angular.bootstrap(document, ['boilerplate']);
