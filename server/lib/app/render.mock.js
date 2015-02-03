'use strict';

var hooks = require('../../lib/app/middlewares/hook');

var context;
var renderArguments;
var originalRender;

module.exports =  {

  lastCalledArgs: function() {
    return renderArguments;
  },


  attach: function() {
    renderArguments = {};

    hooks.add(function() {
      if (this && this.render) {
        originalRender = this.render;
        context = this;
        this.render = function* (path, data) {
          renderArguments = {path: path, data: data};
          context.body = "RENDER STUB";
          context.type = "html";
        };
      }
    });
  },


  restore: function() {
    hooks.reset();
    if (context) context.render = originalRender;
  }

};
