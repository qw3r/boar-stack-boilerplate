'use strict';

var realIpAddress = require('js-stack').lib.realIpAddress;
var logger = require('logentries-logformat')('main');


var GetListJsonAction = function(context) {
  this.context = context;
  this.request = context.request;
};


GetListJsonAction.prototype = {

  process: function* () {
    logger.log('getListJson', { userIp: realIpAddress(this.request) });

    this.context.body = {
      admins: this._getAdmins()
    };
  },


  _getAdmins: function() {
    return [{
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
    }];
  }

};


module.exports = function* () {
  var action = new GetListJsonAction(this);
  yield action.process();
};

