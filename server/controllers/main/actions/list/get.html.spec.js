'use strict';

var server = require('../../../../server');
var request = require('supertest');
var expect = require('chai').expect;
var FakeContext = require('../../../../lib/app/context.mock.js');
var ListHtmlAction = require('./get.html');


describe('Main Controller List GET HTML Action', function(){

  describe('Supertest', function() {

    it('should respond with proper response code and response format', function(done) {
      request(server.listen())
        .get('/list')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(function(err) {
          if (err) return done(err);
          expect(this.renderSpy.lastCalledArgs().path).to.eql('list');
          done();
        }.bind(this));
    });

  });

});
