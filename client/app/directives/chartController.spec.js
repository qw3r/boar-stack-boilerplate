'use strict';

var ChartDirectiveController = require('./chartController');

describe('ChartDirectiveController', () => {

    var subject, $scope;

    var data = [
        {
            value: 500,
            creationDate: 1423695600000,
            value2: 450
        },
        {
            value: 3000,
            creationDate: 1430784000000,
            value2: 900
        },
        {
            value: 1000,
            creationDate: 1431216000000,
            value2: 15
        }
    ];

    beforeEach(inject(($injector, $rootScope) => {
        $scope = $rootScope.$new();

        var series = [
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
        ];
        $scope.config = () => {
            return {
                series : series
            };
        };

        subject = new ChartDirectiveController($scope);
    }));

    it('buildSeriesConfig should build the series\' data from $scope.config().series', () => {
        subject.buildSeriesConfig(data);
        expect($scope.config().series[0].data).to.eql([[data[0].creationDate, data[0].value], [data[1].creationDate, data[1].value], [data[2].creationDate, data[2].value]]);
        expect($scope.config().series[1].data).to.eql([[data[0].creationDate, data[0].value2], [data[1].creationDate, data[1].value2], [data[2].creationDate, data[2].value2]]);
    });
});
