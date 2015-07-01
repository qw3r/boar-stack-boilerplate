'use strict';

class ChartPage {
	constructor() {
		this.datePickerInput = element(by.css('.form-control'));
		this.datePickerOpenButton = element(by.css('.open-datepicker'));
		this.datePickerPopup = element(by.css('.dropdown-menu'));

		this.chart = element(by.css('.chart'));
	}

	getNumberOfMarkers() {
		return element.all(by.css('.highcharts-markers.highcharts-tracker>path')).count();
	}

	getLegendCheckbox(seriesName) {
		return element(by.xpath(".//*[contains(@class,'series-selectors')]//*[contains(@class,'name') and text()='" + seriesName + "']//..//input"));
	}
}

module.exports = new ChartPage();