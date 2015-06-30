'use strict';

var server = require('../../../../server');
var request = require('supertest');
var expect = require('chai').expect;


describe('Main Controller Chart GET HTML Action', function(){

  it('should respond with proper response code and response format', function(done) {
    request(server.listen())
      .get('/chart')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err) {
        if (err) return done(err);
        expect(this.renderSpy.lastCalledArgs().path).to.eql('chart');
        done();
      }.bind(this));
  });

});
