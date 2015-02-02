'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config = require('./tasks/config');
var server = require('./tasks/server')(gulp);


gulp.task('server-copy', function() { return server.copy(false); });
gulp.task('server-copy-only-changed', function () { return server.copy(true); });

gulp.task('server', server.start);

gulp.task('server-watch', function() {
  gulp.watch(config.server.filePattern, ['server-copy-only-changed']);
});

gulp.task('server-test', server.test);

gulp.task('build-clean', function(cb) {
  del([config.build.distPath + '**/*'], cb);
});


gulp.task('build', ['build-clean'], function(cb) {
  runSequence(['server-copy'], cb);
});

gulp.task('start', ['build'], function() {
  gulp.run('server');
  gulp.run('server-watch');
});


gulp.task('test', ['server-test']);
