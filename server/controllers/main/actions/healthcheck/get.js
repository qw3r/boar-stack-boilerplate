'use strict';

var Healthcheck = require('../../../../models/healthcheck');


module.exports = function* () {
  var successDbQuery = true;
  var responseCode = 200;

  try {
    yield Healthcheck.find().exec();
  } catch (ex) {
    responseCode = 500;
    successDbQuery = false;
  }

  this.status = responseCode;
  this.body = { success: successDbQuery };
};
