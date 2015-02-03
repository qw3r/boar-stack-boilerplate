'use strict';

var moment = require('moment');
console.log('It is a beautiful '+ moment().format('dddd') + 'yo');

class View {
  constructor(options) {
    this.model = options.model;
    this.template = options.template;
  }

  log() {
    console.log('1');
  }
}


var v = new View();
v.log();