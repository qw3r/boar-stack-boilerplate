"use strict";

var server = require('../../../../server');
var request = require('co-supertest');
var Healthcheck = require('../../../../models/healthcheck');

describe('Main Controller Healthceck GET Action', function() {

  it('should respond with proper message and code if everything went fine', function* () {
    yield request(server.listen())
      .get('/healthcheck')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({success: true})
      .end();
  });


  it('should respond with failed message and code if something happened in db', function* () {
    this.sandbox.stub(Healthcheck, 'find', function(cb) {
      cb({}, []);
    });

    yield request(server.listen())
      .get('/healthcheck')
      .expect(500)
      .expect('Content-Type', /json/)
      .expect({success: false})
      .end();
  });


});
