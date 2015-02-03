'use strict';

var server = require('../../../server');
var request = require('supertest');


describe('Main Controller Index GET Action', function(){

  it('should respond with proper response code and response format', function(done) {
    request(server.listen())
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(done);
  });

});
