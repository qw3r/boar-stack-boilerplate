'use strict';

var ExampleCtr = require('./example');

describe('ExampleController', () => {

    var exampleCtrl, $http, $httpBackend;

    var httpRespondWith =
      (status, data) => $httpBackend.when('GET', '/list').respond(status, data);

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


    it('should initiate users with empty array', () => {
        expect(exampleCtrl.users).to.be.null;
    });


    it('should initiate error with false', () => {
        expect(exampleCtrl.error).to.be.false;
    });


    it('should fetch users from server', () => {
        httpRespondWith(200, { admins: ['Superman', 'Batman'] });
        exampleCtrl.fetchFromServer();
        $httpBackend.flush();

        expect(exampleCtrl.users).to.eql(['Superman', 'Batman']);
    });


    it('should set error to true if fetch from server fails', () => {
        httpRespondWith(500, {error: 'internal error occured'});
        exampleCtrl.fetchFromServer();
        $httpBackend.flush();

        expect(exampleCtrl.error).to.be.true;
    });
});
