var koa = require('koa');
var app = koa();
var serve = require('koa-static');
var path = require('path');
var config = require('./config');
var router = require('koa-router');
var jade = require('koa-jade');

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


app.use(jade.middleware({ viewPath: path.join(config.root, '/views') }));
app.use(serve(path.join(config.root, '/assets')));
app.use(router(app));


app.get('/', function *(next) {
  yield this.render('index');
});




app.listen(3000);