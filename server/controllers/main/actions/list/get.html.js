'use strict';

var GetListAction = function(context) {
  this.context = context;
  this.params = context.params;
};


GetListAction.prototype = {

  process: function* () {
    var message = 'papaja';
    if (this.params && this.params.fromRequestBody) message += this.params.fromRequestBody;

    yield this.context.render('index', { hello: message });
  }

};


module.exports = function* () {
  var action = new GetListAction(this);
  yield action.process();
};
