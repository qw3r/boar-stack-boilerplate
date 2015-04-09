'use strict';

var angular = require('angular');
var Controller = require('./controllers/example');

angular
  .module("boilerplate", ['templates'])
  .controller('ExampleController', ['$http', Controller])
  .run(($http) => {
    $http.defaults.headers.get = {'Accept': 'application/json'};
  });

angular.bootstrap(document, ['boilerplate']);
