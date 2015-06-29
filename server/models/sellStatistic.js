var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SellStatisticsSchema = new Schema({
	created: Date,
	value: Number
}, {collection: 'sellstatistics'});

var Model = mongoose.model('sellStatistics', SellStatisticsSchema);

module.exports = Model;