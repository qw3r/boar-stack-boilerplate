'use strict';

var gulpif = require('gulp-if');
var changed = require('gulp-changed');

var config = require('./config');

module.exports = function(gulp) {
  return {
    copy: function(onlyChanged) {
      return gulp.src(config.client.filePattern)
        .pipe(gulpif(onlyChanged, changed(config.build.distPath)))
        .pipe(gulp.dest(config.build.distPath+'/assets'));
    }
  };
};
