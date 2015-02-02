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
        ext: 'js',
        watch: [config.build.distPath],
        ignore: ['node_modules/**'],
        delay: 1,
        nodeArgs: ['--harmony']
      });
    },

    copy: function(onlyChanged) {
      return gulp.src(config.server.filePattern)
        .pipe(gulpif(onlyChanged, changed(config.build.distPath)))
        .pipe(gulp.dest(config.build.distPath));
    },

    test: function() {
      return gulp.src('', {read: false})
        .pipe(plumber())
        .pipe(exec('NODE_ENV=test node_modules/mocha/bin/mocha --reporter spec --harmony --require co-mocha "' + config.server.path + '**/*.spec.js"'));
    }
  }
};
