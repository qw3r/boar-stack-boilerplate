"use strict";

class ExampleController {
  constructor ($http) {
    this.someVariable = 5;
    this.$http = $http;
  }

  setSomeVariable (value)  {
    this.someVariable = value;
  }

  fetchFromServer() {
    this.$http.get('/list', {headers: {Accept: 'application/json'}})
      .success((data) => {this.someVariable = data;})
      .error(() => this.someVariable = 0);
  }
}

module.exports = ExampleController;