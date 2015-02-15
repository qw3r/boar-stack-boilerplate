'use strict';

var nodemon = require('gulp-nodemon');
var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var exec = require('gulp-exec');
var plumber = require('gulp-plumber');

var config = require('./config');

module.exports = function(gulp) {
  return {
    start: function() {
      nodemon({
        script: config.server.runnable,
        ext: 'js jade',
        watch: [config.build.distPath],
        delay: 1,
        env: { 'NODE_ENV': 'development' },
        nodeArgs: ['--harmony']
      });
    },

    copy: function(onlyChanged) {
      return gulp.src(config.server.filePattern)
        .pipe(gulpif(onlyChanged, changed(config.build.distPath)))
        .pipe(gulp.dest(config.build.distPath));
    },

    test: function() {
      var reportOptions = {
        err: true,
        stderr: true,
        stdout: true
      };

      return gulp.src('', {read: false})
        .pipe(plumber())
        .pipe(exec('NODE_ENV=test node_modules/mocha/bin/mocha --reporter dot --harmony --colors --require co-mocha "' + config.server.path + '**/*.spec.js"'))
        .pipe(exec.reporter(reportOptions));
    }
  }
};
