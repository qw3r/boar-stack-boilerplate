'use strict';

var realIpAddress = require('../../../../lib/real-ip-address/index');
var logger = require('logentries-logformat')('main');


var GetListJsonAction = function(context) {
  this.context = context;
  this.request = context.request;
};


GetListJsonAction.prototype = {

  process: function* () {
    logger.log('getListJson', { userIp: realIpAddress(this.request) });

    this.context.body = {
      admins: ['superman', 'batman', 'aquaman', 'flash']
    };
  }

};


module.exports = function* () {
  var action = new GetListJsonAction(this);
  yield action.process();
};

