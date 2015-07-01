'use strict';

var ChartController = require('./chart');
var sinon = require('sinon');

describe('ChartController', () => {

    var subject, deferred, $scope;

    var sells = [
        {creationDate: (new Date('2015-05-05')).valueOf(), value: 3000, value2: 5},
        {creationDate: (new Date('2015-05-10')).valueOf(), value: 1000, value2: 7}
    ];

    var sellStatistics = {
        getData() {
            return deferred.promise;
        }
    };

    beforeEach(inject(($injector, $rootScope) => {
        $scope = $rootScope.$new();
        var $timeout = $injector.get('$timeout');
        var $q = $injector.get('$q');
        deferred = $q.defer();
        subject = new ChartController($scope, $timeout, sellStatistics);
    }));

    it('should add chartConfig to the scope', () => {
        expect(subject.chartConfig).to.be.defined;
        expect(subject.chartConfig.options.chart.type).to.eql('line');
        expect(subject.chartConfig.title.text).to.eql('Trends');
        expect(subject.chartConfig.series.length).to.eql(2);
        expect(subject.chartConfig.loading).to.be.true;
    });

    describe('loadData()', () => {
        it('should call sellStatistics.getData() with dateFilter', () => {
            var spy = sinon.spy(sellStatistics, 'getData');
            subject.dateFilter = new Date('2015-05-07');
            subject.loadData();
            expect(spy).to.have.been.calledWith(subject.dateFilter);
        });

        it('should change the loading flag to true if request fails', () => {
            deferred.reject();
            subject.chartConfig.loading = false;
            subject.loadData();
            $scope.$apply();
            expect(subject.chartConfig.loading).to.be.true;
        });

        it('should set seriesData', () => {
            deferred.resolve(sells);
            subject.loadData();
            $scope.$apply();
            expect(subject.seriesData).to.eql(sells);
        });
    });
});
