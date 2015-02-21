'use strict';

var gulp = require('gulp');
var config = require('./tasks/config');
var server = require('./tasks/server')(gulp, config);
var client = require('./tasks/client')(gulp, config);
var e2e = require('./tasks/e2e')(gulp, config);

var options = {
  config: config,
  client: client,
  server: server,
  e2e: e2e
};

require('./tasks/setup')(gulp, options);
