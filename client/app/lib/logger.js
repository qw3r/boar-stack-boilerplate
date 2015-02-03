'use strict';

var moment = require('moment');

class Logger {

  log(arg) {
    console.log(arg + moment().format('dddd'));
  }
}


module.exports = Logger;