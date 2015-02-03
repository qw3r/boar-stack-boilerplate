'use strict';

var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var argv = require('yargs').argv;
var uglify = require('gulp-uglify');

var config = require('./config');

module.exports = function(gulp) {
  return {
    copy: function(onlyChanged) {
      return gulp.src(config.client.filePattern)
        .pipe(gulpif(onlyChanged, changed(config.build.distPath)))
        .pipe(gulp.dest(config.build.distPath+'/assets'));
    },

    copyApp : function() {
      return gulp.src([config.client.appPattern, '!**/*.spec.*'])
          .pipe(plumber())
          .pipe(browserify({
            shim: {},
            debug: !argv.production,
            extensions: ['.js']
          }))
          .pipe(gulpif(argv.production, uglify({ mangle: false })))
          .pipe(gulp.dest(config.client.appDistPath))
    }

  }
};
