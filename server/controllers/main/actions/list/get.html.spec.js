'use strict';

var server = require('../../../../server');
var request = require('supertest');
var expect = require('chai').expect;

describe('Main Controller List GET JSON Action', function(){

  it('should respond with proper response code and response format', function(done) {
    request(server.listen())
      .get('/list')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function(err) {
        if (err) return done(err);
        expect(this.renderSpy.lastCalledArgs().data).to.eql({ hello: 'papaja' });
        expect(this.renderSpy.lastCalledArgs().path).to.eql('index');
        done();
      }.bind(this));
  });

});
