'use strict';

var chartConfig = require('../configs/chartConfig');

class ChartController {

  constructor ($scope, $timeout, sellStatistics) {
    this.chartConfig = chartConfig;
    this.sellStatistics = sellStatistics;

    this.dateFilter = new Date('2015.01.01');
    this.minDate = this.dateFilter;
    this.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    this.opened = false;
    this.open = (event) => {
      event.stopPropagation();
      this.opened = !this.opened;
    };


    $timeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    this.chartConfig.loading = true;
    this.sellStatistics.getData(this.dateFilter).then((result) => {
      this.seriesData = result;
      this.chartConfig.loading = false;
    });
  }
}

module.exports = ChartController;
