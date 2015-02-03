"use strict";

class ExampleController {
  constructor () {
    this.variable = 5;
  }

  setVariable (value)  {
    this.variable = value;
  }
}

module.exports = ExampleController;