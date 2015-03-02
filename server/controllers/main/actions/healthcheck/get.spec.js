"use strict";

var server = require('../../../../server');
var request = require('supertest');
var Healthcheck = require('../../../../models/healthcheck');

describe('Main Controller Healthceck GET Action', function() {

  it('should respond with proper message and code if everything went fine', function(done) {
    request(server.listen())
      .get('/healthcheck')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({success: true})
      .end(done);
  });


  it('should respond with failed message and code if something happened in db', function(done) {
    this.sandbox.stub(Healthcheck, 'find', function(cb) {
      cb({}, []);
    });

    request(server.listen())
      .get('/healthcheck')
      .expect(500)
      .expect('Content-Type', /json/)
      .expect({success: false})
      .end(done);
  });


});
