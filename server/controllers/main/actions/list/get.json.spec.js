'use strict';

var expect = require('chai').expect;
var FakeContext = require('boar-stack-mocks').context;
var GetListJsonAction = require('./get.json');

describe('Main Controller List GET JSON Action', function(){

  it('should respond with the admins', function* () {

    var context = FakeContext.create();

    yield GetListJsonAction.call(context);

    expect(context.body).to.eql({
      admins: [{
        name: 'Adam',
        img: 'img1.gif'
      }, {
        name: 'Peti',
        img: 'img2.gif'
      }, {
        name: 'Sonic',
        img: 'img3.gif'
      }, {
        name: 'Viktor',
        img: 'img4.gif'
      }]
    });

  });

});
