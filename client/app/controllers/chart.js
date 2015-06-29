'use strict';

var chartConfig = require('../configs/chartConfig');

class ChartController {

  constructor ($timeout, sellStatistics) {
    this.chartConfig = chartConfig;
    this.sellStatistics = sellStatistics;

    $timeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    this.chartConfig.loading = true;
    return this.sellStatistics.getData().then((result) => {
      var highChartsSellSeries = result.map((item) => {
        return [(new Date(item.created)).valueOf(), item.value];
      });
      this.chartConfig.series = [{
        data:  highChartsSellSeries
      }];
      this.chartConfig.loading = false;

      return highChartsSellSeries;
    });
  }

}

module.exports = ChartController;
