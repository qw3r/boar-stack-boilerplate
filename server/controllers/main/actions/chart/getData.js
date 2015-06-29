'use strict';

var SellStatistic = require('../../../../models/sellStatistic');

module.exports = function* () {
	this.body = yield SellStatistic.find({}).sort({created: -1}).exec();
};
