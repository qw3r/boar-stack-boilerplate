'use strict';

var Promise = require('bluebird');

class sellStatistics {
	constructor($http) {
		this.$http = $http;
	}

	getData(date) {
		var deferred = Promise.defer();
		this.$http.get('/sell-statistics', {params: {dateFilter: date.valueOf()}}).success(function(result) {
			deferred.resolve(result);
		});
		return deferred.promise;
	}
}


module.exports = sellStatistics;