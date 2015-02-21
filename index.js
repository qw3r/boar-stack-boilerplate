'use strict';
var merge = require('merge');
var config = require('./tasks/config');
var client = require('./tasks/client');
var server = require('./tasks/server');
var e2e = require('./tasks/e2e');
var setup = require('./tasks/setup');

module.exports = function(customConfig) {
  var finalConfig = merge.recursive(true, config, customConfig);

  return {
    config: finalConfig,
    client: function(gulp) {
      return client(gulp, finalConfig);
    },
    server: function(gulp) {
      return server(gulp, finalConfig);
    },
    e2e: function(gulp) {
      return e2e(gulp, finalConfig);
    },
    setup: function(gulp) {
      return setup(gulp, {
        config: finalConfig,
        client: client(gulp, finalConfig),
        server: server(gulp, finalConfig),
        e2e: e2e(gulp, finalConfig)
      });
    }
  };
};
