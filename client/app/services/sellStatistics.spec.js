'use strict';

var SellStatistics = require('./sellStatistics');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('SellStatistics', () => {

    var subject, $http, $httpBackend;

    beforeEach(inject(($injector) => {
        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend = $injector.get('$httpBackend');
        subject = new SellStatistics($http);
    }));

    it('should call backend for sales', () => {
        var sells = [
            {creationDate: (new Date('2015-05-05')).valueOf(), value: 3000, value2: 5},
            {creationDate: (new Date('2015-05-10')).valueOf(), value: 1000, value2: 7}
        ];

        $httpBackend.when('GET', '/sell-statistics?dateFilter=1420070400000').respond(200, {data: sells});

        var result = subject.getData(new Date('2015-01-01'));
        $httpBackend.flush();

        expect(result).to.eventually.eql(sells);
    });
});
