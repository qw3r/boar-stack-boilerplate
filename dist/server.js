var koa = require('koa');
var app = koa();
var serve = require('koa-static');
var path = require('path');
var config = require('./config');
var router = require('koa-router');

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


app.use(serve(path.join(config.root, '/assets')));
app.use(router(app));

app.get('/', function *(next) {
  this.body = 'Hello World2';
});



app.listen(3000);