'use strict';

var GetChartAction = function(context) {
  this.context = context;
  this.request = context.request;
};


GetChartAction.prototype = {

  process: function* () {
    yield this.context.render('chart');
  }

};


module.exports = function* () {
  var action = new GetChartAction(this);
  yield action.process();
};
