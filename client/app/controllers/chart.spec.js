'use strict';

var ChartController = require('./chart');
var Promise = require('bluebird');
// var SellStatistics = require('../services/sellStatistics');

describe('ChartController', () => {

    var subject, $scope, $timeout;

    var sells = [
        {creationDate: (new Date('2015-05-05')).valueOf(), value: 3000, value2: 5},
        {creationDate: (new Date('2015-05-10')).valueOf(), value: 1000, value2: 7}
    ];

    var sellsRequestResult = [
        [sells[0].creationDate, sells[0].value, sells[0].value2],
        [sells[1].creationDate, sells[1].value, sells[1].value2]
    ];

    var sellStatistics = {
        getData() {
            return Promise.resolve(sells);
        }
    };

    beforeEach(inject(($injector, $rootScope) => {
        $scope = $rootScope.$new();
        $timeout = $injector.get('$timeout');
        subject = new ChartController($scope, $timeout, sellStatistics);
    }));

    it('should add chartConfig to the scope', () => {
        expect(subject.chartConfig).to.be.defined;
        expect(subject.chartConfig.options.chart.type).to.eql('line');
        expect(subject.chartConfig.title.text).to.eql('Trends');
        expect(subject.chartConfig.series.length).to.eql(2);
        expect(subject.chartConfig.loading).to.be.true;
    });

    it('should modify the result after getting data to highCharts config', () => {
        expect(subject.loadData()).to.eventually.eql(11);
        // subject.loadData().then((result) => {
        //     expect(result).to.eql(sells);
        //     done();
        // });
    });

    it.only('should modify highCharts\' config', () => {
        expect(subject.chartConfig.loading).to.be.true;
        subject.loadData().then((res) => {
            console.log('aaa')
            expect(subject.seriesData).to.eql(sells);
            expect(subject.chartConfig.loading).to.be.false;
            // done();
        })
        // .catch(done);
    });

    it.only('modifying dateFilter should call loadData()', (done) => {
        subject.loadData().then(() => {
            expect(subject.seriesData.length).to.eql(2);
            subject.dateFilter = new Date('2015-05-06');
            // expect(subject.loadData).to.have.been.called;
            done();
        })
        .catch(done);
    });

    it('modifying dateFilter should change highCharts\' series', (done) => {
        subject.loadData().then(() => {
            expect(subject.seriesData.length).to.eql(2);
            subject.dateFilter = new Date('2015-05-06');
            
            // expect(subject.chartConfig.series.data[0]).to.eql([sells[0].]);
            done();
        })
        .catch(done);
    });
});
