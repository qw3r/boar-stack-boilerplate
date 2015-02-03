var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HealthcheckSchema = new Schema();
var Model = mongoose.model('Healthcheck', HealthcheckSchema);

module.exports = Model;