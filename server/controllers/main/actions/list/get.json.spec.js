'use strict';

var server = require('../../../../server');
var request = require('supertest');
var expect = require('chai').expect;

describe('Main Controller List GET JSON Action', function(){

  it('should respond with proper response code and response format', function(done) {
    request(server.listen())
      .get('/list')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.eql({
          error: false
        });
        done();
      }.bind(this));
  });

});
