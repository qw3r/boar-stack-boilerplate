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
  series: [
    {
        name: 'sells 1',
        color: '#990000',
        dataType: 'value',
        visible: true
    },
    {
        name: 'sells 2',
        color: '#000099',
        dataType: 'value2',
        visible: true
    }
  ],
  loading: true,
  xAxis: {
    title: {text: 'Dates'},
    type: 'datetime'
  },
  yAxis: {
    title: {text: 'Sell numbers'}
  },
  useHighStocks: false
};