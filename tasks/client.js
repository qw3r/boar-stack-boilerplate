'use strict';

var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var argv = require('yargs').argv;
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var nib = require('nib');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var transform = require('vinyl-transform');

var config = require('./config');

var isProduction = argv.production;

module.exports = function(gulp) {
  return {
    copyStatic: function() {
      return gulp.src(config.client.static.copyPattern)
        .pipe(gulp.dest(config.client.static.target));
    },

    buildStylesheets: function() {
      return gulp.src(config.client.stylesheets.buildPattern)
        .pipe(plumber())
        .pipe(gulpif(!isProduction, sourcemaps.init()))
        .pipe(stylus({
          use: nib(),
          compress: isProduction
        }))
        .pipe(gulpif(!isProduction, sourcemaps.write(config.client.externalSourceMap ? '.' : null)))
        .pipe(plumber.stop())
        .pipe(gulp.dest(config.client.stylesheets.target));
    },

    buildScripts: function() {
      var browserified = transform(function(filename) {
        var b = browserify({
          entries: [filename],
          debug: !isProduction
        });
        return b.bundle();
      });

      return gulp.src([config.client.app.buildPattern, '!**/*.spec.*'])
        .pipe(browserified)
        .pipe(gulpif(isProduction, uglify({ mangle: false })))
        .pipe(gulp.dest(config.client.app.target));
    }
  };
};
