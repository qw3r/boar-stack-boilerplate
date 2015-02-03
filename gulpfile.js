'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('./tasks/config');
var server = require('./tasks/server')(gulp);
var client = require('./tasks/client')(gulp);

// Public Tasks
gulp.task('build-clean', function(cb) {
  del([config.build.distPath + '**/*'], cb);
});

gulp.task('build', ['build-clean'], function() {
  gulp.run('server-copy');
  gulp.run('client-copy');
  gulp.run('client-bundle');
});

gulp.task('start', ['build'], function() {
  gulp.run('server');
  gulp.run('server-watch');
  gulp.run('client-watch');
});

gulp.task('test', ['server-test']);



// Server Tasks
gulp.task('server', server.start);
gulp.task('server-copy', function() { return server.copy(false); });
gulp.task('server-copy-only-changed', function () { return server.copy(true); });
gulp.task('server-watch', function() {
  gulp.watch(config.server.filePattern, ['server-copy-only-changed']);
});
gulp.task('server-test', server.test);



// Client Tasks
gulp.task('client-copy', function() { return client.copy(false); });
gulp.task('client-copy-only-changed', function () { return client.copy(true); });
gulp.task('client-bundle', function() { return client.bundle(); });

gulp.task('client-watch', function() {
  gulp.watch(config.client.filePattern, ['client-copy-only-changed']);
  gulp.watch(config.client.appPattern, ['client-bundle']);
});