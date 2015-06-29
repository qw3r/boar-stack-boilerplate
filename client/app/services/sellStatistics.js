'use strict';

var Promise = require('bluebird');

class sellStatistics {
	constructor($http) {
		this.$http = $http;

		this.data = null;
	}

	getData() {
		// if (this.data) {
		// 	return Promise.resolve(this.data);
		// } else {

		// }
		var deferred = Promise.defer();
		this.$http.get('/sell-statistics').success(function(result) {
			deferred.resolve(result);
		});
		return deferred.promise;
	}
}


module.exports = sellStatistics;