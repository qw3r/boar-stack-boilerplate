'use strict';

var SellStatistics = require('./sellStatistics');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('ChartController', () => {

    var subject, $http, $httpBackend;

    beforeEach(inject(($injector) => {
        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend = $injector.get('$httpBackend');
        subject = new SellStatistics($http);
    }));

    it('should call backend for sales', () => {
        var sells = [
            {created: (new Date('2015-05-05')).valueOf(), value: 3000},
            {created: (new Date('2015-05-10')).valueOf(), value: 1000}
        ];

        $httpBackend.when('GET', '/sell-statistics').respond(200, {data: sells});

        var result = subject.getData();
        $httpBackend.flush();

        expect(result).to.eventually.eql(sells);
    });
});
