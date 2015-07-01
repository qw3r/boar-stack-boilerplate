'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('./tasks.config');
var tasks = require('boar-tasks').getTasks(gulp, config);

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

gulp.task('test', ['server-test', 'client-test', 'server-jshint', 'client-jshint']);



// Helper
gulp.task('build-clean', function(cb) {
  tasks.build.clean(cb);
});



// Server Tasks
gulp.task('server', tasks.server.start);
gulp.task('server-copy', function() { return tasks.server.copy(false); });
gulp.task('server-copy-only-changed', function () {
  return tasks.server.copy(true);
});
gulp.task('server-jshint', function() { return tasks.server.jshint(); });
gulp.task('server-watch', function() {
  gulp.watch(tasks.config.server.filePattern, ['server-copy-only-changed']);
});
gulp.task('server-test', tasks.server.test);



// Client Tasks
gulp.task('client-build', [
  'client-build-static',
  'client-build-vendor',
  'client-build-scripts',
  'client-build-stylesheets',
  'client-build-views'
]);
gulp.task('client-build-static', function () { return tasks.client.copyStatic(); });
gulp.task('client-build-vendor', function() { return tasks.client.concatVendors(); });
gulp.task('client-build-vendor-alt', function() { return tasks.client.buildVendors(); });
gulp.task('client-build-scripts', function() { return tasks.client.buildScripts(); });
gulp.task('client-build-scripts-deny-errors', function() { return tasks.client.buildScriptsDenyErrors(); });
gulp.task('client-build-stylesheets', function() { return tasks.client.buildStylesheets(); });
gulp.task('client-build-views', function() { return tasks.client.buildViews(); });
gulp.task('client-jshint', function() { return tasks.client.jshint(); });

gulp.task('client-watch', function() {
  gulp.watch(tasks.config.client.static.watchPattern, ['client-build-static']);
  gulp.watch(tasks.config.client.app.watchPattern, ['client-build-scripts-deny-errors']);
  gulp.watch(tasks.config.client.stylesheets.watchPattern, ['client-build-stylesheets']);
  gulp.watch(tasks.config.client.app.viewPattern, ['client-build-views']);
});

gulp.task('client-test', tasks.client.test);

// End to End Tasks
gulp.task('e2e-test-run', tasks.e2e.test);
gulp.task('e2e-test-start', tasks.e2e.startServer);
gulp.task('e2e-test-end', tasks.e2e.stopServer);
gulp.task('e2e-test', function(done) {
  runSequence('e2e-test-start', 'e2e-test-run', 'e2e-test-end', function() {
    done();
  });
});

gulp.task('update-webdriver', tasks.e2e.updateWebDriver);
