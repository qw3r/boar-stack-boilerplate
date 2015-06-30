'use strict';

var SellStatistic = require('../../../../models/sellStatistic');

module.exports = function* () {
	this.body = yield SellStatistic.findOrdered(this.request.query.dateFilter);
};
