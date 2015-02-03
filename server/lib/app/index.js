'use strict';

var fs = require('fs');
var koa = require('koa');
var serve = require('koa-static');
var cors = require('koa-cors');
var jade = require('koa-jade');
var app = module.exports = koa();
var config = require('./../../config/index');
var errorHandlerMiddleware = require('./middlewares/error-handler');
var methodOverride = require('koa-methodoverride');
var hookMiddleware = require('./middlewares/hook').getMiddleware();

var App = function(koaApp) {
  this.koaApp = koaApp;
};

App.prototype = {

  addCorsSupportMiddleware: function() {
    this.addMiddleware(cors());
    this.addMiddleware(function* (next) {
      this.set('Access-Control-Allow-Origin', '*');
      this.set('Access-Control-Allow-Headers', 'X-Requested-With');
      yield next;
    });
  },


  loadControllers: function(path) {
    fs.readdirSync(path).forEach(function (file) {
      var filePath = path + '/' + file + '/index.js';
      if (!fs.existsSync(filePath)) return;
      require(filePath)(this.koaApp);
    }.bind(this));
  },


  loadModels: function(path) {
    fs.readdirSync(path).forEach(function (file) {
      if (/(.*)\.(js$)/.test(file) && !/(.*)\.(spec.js$)/.test(file)) {
        require(path + '/' + file);
      }
    }.bind(this));
  },


  addMiddleware: function(middleware) {
    this.koaApp.use(middleware);
  },


  addStaticContentMiddleware: function(path) {
    this.addMiddleware(serve(path));
  },


  addDynamicViewMiddleware: function(root, cache) {
    this.addMiddleware(jade.middleware({
      viewPath: root,
      noCache: !cache
    }));
  },


  addHookMiddleware: function() {
    this.addMiddleware(hookMiddleware);
  },


  addMethodOverrideMiddleware: function(fieldName) {
    this.addMiddleware(methodOverride(fieldName));
  },


  addErrorHandlerMiddleware: function() {
    this.addMiddleware(errorHandlerMiddleware);
  },


  listen: function() {
    this.koaApp.listen(config.port);
    console.log('Application started:', { port: config.port, env: config.env });
  }

};

module.exports = App;
