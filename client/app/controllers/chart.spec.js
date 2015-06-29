'use strict';

var ChartController = require('./chart');
var Promise = require('bluebird');
// var SellStatistics = require('../services/sellStatistics');

describe('ChartController', () => {

    var subject, $timeout;

    var sells = [
        {created: (new Date('2015-05-05')).valueOf(), value: 3000},
        {created: (new Date('2015-05-10')).valueOf(), value: 1000}
    ];

    var sellsRequestResult = [
        [sells[0].created, sells[0].value],
        [sells[1].created, sells[1].value]
    ];

    var sellStatistics = {
        getData() {
            return Promise.resolve(sells);
        }
    };

    beforeEach(inject(($injector) => {
        $timeout = $injector.get('$timeout');
        subject = new ChartController($timeout, sellStatistics);
    }));

    it('should add chartConfig to the scope', () => {
        expect(subject.chartConfig).to.be.defined;
        expect(subject.chartConfig.options.chart.type).to.eql('line');
        expect(subject.chartConfig.title.text).to.eql('Trends');
        expect(subject.chartConfig.series.length).to.eql(0);
        expect(subject.chartConfig.loading).to.be.true;
    });

    it('should modify the result after getting data to highCharts config', () => {
        expect(subject.loadData()).to.eventually.eql(sellsRequestResult);
    });

    it('should modify highCharts\' config', () => {
        expect(subject.chartConfig.loading).to.be.true;
        subject.loadData().then((res) => {
            expect(subject.chartConfig.series).to.eql([{data: sellsRequestResult}]);
            expect(subject.chartConfig.loading).to.be.false;
        });
    });
});
