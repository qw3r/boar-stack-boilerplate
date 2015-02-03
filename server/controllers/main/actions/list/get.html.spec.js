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
          expect(this.renderSpy.lastCalledArgs().data).to.eql({ hello: 'papaja' });
          expect(this.renderSpy.lastCalledArgs().path).to.eql('index');
          done();
        }.bind(this));
    });

  });


  describe('Action test', function() {

    it('should render the proper jade with proper data', function* () {
      var context = FakeContext.create();
      var requestBody = {
        fromRequestBody: 'yo'
      };

      context.setParamsBody(requestBody);

      yield ListHtmlAction.call(context);

      expect(context.getLastRenderPath()).to.eql('index');
      expect(context.getLastRenderData()).to.eql({ hello: 'papajayo' });
    });

  });


});
