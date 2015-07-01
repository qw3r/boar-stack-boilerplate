'use strict';

class sellStatistics {
	constructor($http) {
		this.$http = $http;
	}

	getData(date) {
		return this.$http.get('/sell-statistics', {params: {dateFilter: date.valueOf()}});
	}
}


module.exports = sellStatistics;