'use strict';

var testDatabaseSetup = require('./TestDatabaseSetup');
var chartPage = require('./ChartPage');
var config = require('../server/config');
var mongoose = require('mongoose');

describe('DatePicker End-to-End', function() {
    beforeAll(function (done) {
      mongoose.connect(config.mongooseUri, done);
    });

    afterAll(function (done) {
      mongoose.disconnect(done);
    });

    beforeEach(function(done) {
      testDatabaseSetup.clearChartData(function () {
        testDatabaseSetup.insertTestChartData(done);
      });
    });

    it('clicking on the button should open datepicker', function() {
       browser.get('/chart');

       expect(chartPage.datePickerInput.isDisplayed()).toEqual(true);
       expect(chartPage.chart.isDisplayed()).toEqual(true);

       chartPage.datePickerOpenButton.click();
       expect(chartPage.datePickerPopup.isDisplayed()).toEqual(true);
    });

    it('changing the date input should update the chart', function() {
       browser.get('/chart');

       chartPage.datePickerInput.clear();
       chartPage.datePickerInput.sendKeys('2015-05-6');
       element(by.css('.header')).click();
       expect(chartPage.getNumberOfMarkers()).toEqual(2);
    });

    it('changing the date input should update the chart', function() {
       browser.get('/chart');

       expect(chartPage.getNumberOfMarkers()).toEqual(6);
       var sells1Checkbox = chartPage.getLegendCheckbox('sells 1');
       sells1Checkbox.click();
       expect(chartPage.getNumberOfMarkers()).toEqual(3);
    });
});