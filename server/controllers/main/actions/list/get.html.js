'use strict';

var realIpAddress = require('boar-stack').lib.realIpAddress;
var logger = require('logentries-logformat')('main');


var GetListAction = function(context) {
  this.context = context;
  this.request = context.request;
};


GetListAction.prototype = {

  process: function* () {
    logger.log('getList', { userIp: realIpAddress(this.request) });

    yield this.context.render('list');
  }

};


module.exports = function* () {
  var action = new GetListAction(this);
  yield action.process();
};
