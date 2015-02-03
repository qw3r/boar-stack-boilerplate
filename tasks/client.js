'use strict';

var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var browserify = require('browserify');
var argv = require('yargs').argv;
var uglify = require('gulp-uglify');
var transform = require('vinyl-transform');
var karma = require('karma').server;


var config = require('./config');

module.exports = function(gulp) {
  return {
    copy: function(onlyChanged) {
      return gulp.src(config.client.filePattern)
        .pipe(gulpif(onlyChanged, changed(config.build.distPath)))
        .pipe(gulp.dest(config.build.distPath+'/assets'));
    },

    bundle : function() {
        var browserified = transform(function(filename) {
            var b = browserify({
                entries: [filename],
                debug: !argv.production
            });
            return b.bundle();
        });

        return gulp.src([config.client.appEntryPattern, '!**/*.spec.*'])
            .pipe(browserified)
            .pipe(gulpif(argv.production, uglify({ mangle: false })))
            .pipe(gulp.dest(config.client.appDistPath));
    },

    test: function(done) {
      karma.start({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
      }, done);
    }
  }
};
