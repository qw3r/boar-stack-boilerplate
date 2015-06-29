'use strict';

var angular = require('angular');
var Controller = require('./controllers/chart');
var sellStatistics = require('./services/sellStatistics');
var Promise = require('bluebird');

angular
  .module('chart', ['highcharts-ng', 'templates'])
  .service('sellStatistics', ['$http', sellStatistics])
  .controller('ChartController', ['$timeout', 'sellStatistics' , Controller])
  .run(($http, $rootScope) => {
  	Promise.setScheduler(function (cb) {
        $rootScope.$evalAsync(cb);
    });
    $http.defaults.headers.get = {'Accept': 'application/json'};
  });

angular.bootstrap(document, ['chart']);
