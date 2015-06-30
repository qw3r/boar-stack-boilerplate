'use strict';

class ChartController {
	constructor($scope) {
		this.$scope = $scope;
	}

	buildSeriesConfig(data) {
		angular.forEach(this.$scope.config().series, function(series) {
			series.data = createSeries(series.name, series.color, series.dataType);
		});

		function createSeries (name, color, dataType) {
		  var seriesData = data.map((item) => {
		    return [(new Date(item.creationDate)).valueOf(), item[dataType]];
		  });
		  return seriesData;
		}
	}
}

module.exports = ChartController;