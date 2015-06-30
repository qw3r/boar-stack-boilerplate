'use strict';

class Chart {
	constructor() {
		this.restrict = 'AE';
		this.scope = {
			config: '&chartConfig',
			data: '='
		};
		this.controller = 'ChartDirectiveController';
		this.templateUrl = 'views/sub/chart.html';
	}

	link(scope, element, attrs, ctrl) {
		scope.$watch('data', function (value) {
			value && ctrl.buildSeriesConfig(value);
		});
	}
}

module.exports = Chart;