'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config = require('./tasks/config');
var server = require('./tasks/server')(gulp);
var client = require('./tasks/client')(gulp);

// Public Tasks
gulp.task('build', ['build-clean'], function(cb) {
  runSequence([
    'server-copy', 'client-build'
  ], cb);
});

gulp.task('start', ['build'], function() {
  gulp.run('server');
  gulp.run('server-watch');
  gulp.run('client-watch');
});

gulp.task('test', ['server-test', 'client-test']);



// Helper
gulp.task('build-clean', function(cb) {
  del([config.build.distPath + '**/*'], cb);
});



// Server Tasks
gulp.task('server', server.start);
gulp.task('server-copy', function() { return server.copy(false); });
gulp.task('server-copy-only-changed', function () { return server.copy(true); });
gulp.task('server-watch', function() {
  gulp.watch(config.server.filePattern, ['server-copy-only-changed']);
});
gulp.task('server-test', server.test);



// Client Tasks
gulp.task('client-build', ['client-build-static', 'client-build-scripts', 'client-build-stylesheets']);
gulp.task('client-build-static', function () { return client.copyStatic(); });
gulp.task('client-build-scripts', function() { return client.buildScripts(); });
gulp.task('client-build-stylesheets', function() { return client.buildStylesheets(); });

gulp.task('client-watch', function() {
  gulp.watch(config.client.static.watchPattern, ['client-build-static']);
  gulp.watch(config.client.app.watchPattern, ['client-build-scripts']);
  gulp.watch(config.client.stylesheets.watchPattern, ['client-build-stylesheets']);
});

gulp.task('client-test', client.test);
