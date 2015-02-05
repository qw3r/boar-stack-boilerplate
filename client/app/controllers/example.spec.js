'use strict';

var ExampleCtr = require('./example');

describe('ExampleController', () => {
    var exampleCtrl, $http, $httpBackend;

    var httpRespondWith = (status, data) => $httpBackend.when('GET', '/list').respond(status, data);

    beforeEach(inject(($injector) => {
        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(() => {
       exampleCtrl = new ExampleCtr($http);
    });

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should initiate someVariable with value 5', () => {
        expect(exampleCtrl.someVariable).to.eql(5);
    });

    it('should fetch someVariable from server', () => {
        httpRespondWith(200, [1,2,3]);
        exampleCtrl.fetchFromServer();
        $httpBackend.flush();

        expect(exampleCtrl.someVariable).to.eql([1,2,3]);
    });

    it('should reset someVariable to value 0 if fetch from server fails', () => {
        httpRespondWith(500, {error: 'internal error occured'});
        exampleCtrl.fetchFromServer();
        $httpBackend.flush();

        expect(exampleCtrl.someVariable).to.eql(0);
    });
});