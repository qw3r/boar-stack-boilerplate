'use strict';

var argv = require('yargs').argv;
var config = require('./config');
var protractorHelper = require('gulp-protractor');

var isProduction = argv.production;

module.exports = function(gulp) {
    return {
        test: function() {
            gulp.src(["./e2e/*.spec.js"])
                .pipe(protractorHelper.protractor({
                    configFile: "protractor.conf.js",
                    args: []
                }))
        },
        updateWebDriver: function(done) {
            protractorHelper.webdriver_update(done);
        }
    };
};
