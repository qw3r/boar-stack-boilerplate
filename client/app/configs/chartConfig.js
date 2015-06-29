'use strict';

module.exports =  {
  options: {
      chart: {
          type: 'line'
      },
      tooltip: {
          style: {
              padding: 10,
              fontWeight: 'bold'
          }
      }
  },
  title: {
     text: 'Trends'
  },
  series: [],
  loading: true,
  xAxis: {
    title: {text: 'Dates'},
    type: 'datetime'
  },
  yAxis: {
    title: {text: 'Sell numbers'}
  },
  useHighStocks: false,
  func (chart) {
   //setup some logic for the chart
  }
};