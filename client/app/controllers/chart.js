'use strict';

var chartConfig = require('../configs/chartConfig');

class ChartController {

  constructor ($scope, $timeout, sellStatistics) {
    this.chartConfig = chartConfig;
    this.sellStatistics = sellStatistics;

    this.dateFilter = new Date('2015.01.01');
    this.minDate = this.dateFilter;

    $timeout(() => {
      this.loadData();
    }, 1000);

    $scope.$watch('ctrl.dateFilter', this.loadData.bind(this));
  }

  loadData() {
    this.chartConfig.loading = true;
    return this.sellStatistics.getData(this.dateFilter).then((result) => {
      this.seriesData = result;
      this.chartConfig.loading = false;

      return this.seriesData;
    });
  }
}

module.exports = ChartController;
