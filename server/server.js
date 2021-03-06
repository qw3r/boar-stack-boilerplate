var koa = require('koa');
var path = require('path');
var koaApp = module.exports = koa();
var config = require('./config');
var App = require('boar-stack').app;
var mongoose = require('mongoose');


var app = new App(koaApp);
mongoose.connect(config.mongooseUri);
app.addDynamicViewMiddleware(path.join(config.root, '/views'), config.env === 'development');
app.addStaticContentMiddleware(path.join(config.root, '/assets'));
app.addHookMiddleware();
app.loadControllers(path.join(config.root, 'controllers'));
app.loadModels(path.join(config.root, 'models'));


if (!module.parent) { app.listen(config.port); }
