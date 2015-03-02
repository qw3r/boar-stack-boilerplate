var taskConfig = require('./tasks/config');
var _ = require('lodash');
var gulpConfig = require('./tasks/config');

module.exports = function(config) {
  var configHash = {
    files: gulpConfig.client.vendors.concat([
      'node_modules/angular-mocks/angular-mocks.js',
      taskConfig.client.app.testPattern
    ]),
    preprocessors: {}
  };

  configHash.preprocessors[taskConfig.client.app.testPattern] = ['browserify'];

  _.extend(configHash, {

    basePath: '',

    frameworks: ['mocha', 'browserify', 'sinon-chai'],

    exclude: [],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });

  config.set(configHash);
};
