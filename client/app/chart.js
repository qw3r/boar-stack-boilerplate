'use strict';

var angular = require('angular');
var Controller = require('./controllers/chart');
var ChartController = require('./directives/chartController');
var ChartDirective = require('./directives/chart');
var sellStatistics = require('./services/sellStatistics');

angular
  .module('chart', ['highcharts-ng', 'templates'])
  .service('sellStatistics', ['$http', sellStatistics])
  .controller('ChartController', ['$scope', '$timeout', 'sellStatistics' , Controller])
  .controller('ChartDirectiveController', ['$scope', ChartController])
  .directive('chart', [() => {return new ChartDirective();}])
  .run(($http) => {
    $http.defaults.headers.get = {'Accept': 'application/json'};
  });

angular.bootstrap(document, ['chart', 'ui.bootstrap']);
