'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SellStatisticsSchema = new Schema({
	creationDate: Number,
	value: Number,
	value2: Number
}, {collection: 'sellstatistics'});

SellStatisticsSchema.statics.findOrdered = function findOrdered (dateFilter) {
  return this.model('sellStatistics').find({creationDate: {$gt: dateFilter} }).sort({creationDate: 1}).exec();
};

var Model = mongoose.model('sellStatistics', SellStatisticsSchema);

module.exports = Model;