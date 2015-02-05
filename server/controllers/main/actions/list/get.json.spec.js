'use strict';

var server = require('../../../../server');
var expect = require('chai').expect;
var FakeContext = require('js-stack').mocks.context;
var GetListJsonAction = require('./get.json');

describe('Main Controller List GET JSON Action', function(){

  it('should respond with the admins', function* () {

    var context = FakeContext.create();

    yield GetListJsonAction.call(context);

    expect(context.body).to.eql({
      admins: [{
        name: 'Adam',
        img: 'http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/0e56a438cef8d19f7a7144321f6b143f.gif?v=10908'
      }, {
        name: 'Peti',
        img: 'http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/d0a591bfa0844194872dacd4333ed381.gif?v=10974'
      }, {
        name: 'Sonic',
        img: 'http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/f5636a6c902f181d19fa94fbd2a557cf.gif?v=8658'
      }, {
        name: 'Viktor',
        img: 'http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/thumb/b433cc3a6c2ec9990c3c2e91dd89ae35.gif?v=37522'
      }]
    });

  });

});
