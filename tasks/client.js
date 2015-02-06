'use strict';

var gulpif = require('gulp-if');
var stylus = require('gulp-stylus');
var argv = require('yargs').argv;
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var nib = require('nib');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var transform = require('vinyl-transform');
var karma = require('karma').server;
var Q = require('q');
var fs = require('fs');

var config = require('./config');

var isProduction = argv.production;

module.exports = function(gulp) {
  return {
    copyStatic: function() {
      return gulp.src(config.client.static.copyPattern)
        .pipe(gulp.dest(config.client.static.target));
    },

    copyVendor: function() {
      var deferred = Q.defer();

      config.client.static.vendors.forEach(function(moduleName)
      {
        var sourcePath = 'node_modules/'+moduleName;

        if (fs.existsSync(sourcePath+'/dist')) {
          sourcePath += '/dist';
        }

        sourcePath += '/**/*';

        var stream = gulp.src(sourcePath)
          .pipe(gulp.dest(config.client.static.target + '/' + moduleName));

        deferred.resolve(stream);
      });

      return deferred.promise;
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
        .pipe(plumber())
        .pipe(browserified)
        .pipe(gulpif(isProduction, uglify({ mangle: false })))
        .pipe(gulp.dest(config.client.app.target));
    },

    test: function(done) {
      karma.start({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
      }, done);
    }
  };
};
