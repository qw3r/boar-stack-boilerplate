'use strict';

var realIpAddress = require('../../../../lib/real-ip-address/index');
var logger = require('logentries-logformat')('main');


var GetListAction = function(context) {
  this.context = context;
  this.params = context.params;
  this.request = context.request;
};


GetListAction.prototype = {

  process: function* () {
    var message = 'papaja';
    if (this.params && this.params.fromRequestBody) message += this.params.fromRequestBody;

    logger.log('mainActionUsed', { userIp: realIpAddress(this.request) });

    yield this.context.render('index', { hello: message });
  }

};


module.exports = function* () {
  var action = new GetListAction(this);
  yield action.process();
};
