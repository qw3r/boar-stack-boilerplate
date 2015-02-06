"use strict";

class ExampleController {

  constructor ($http) {
    this.users = null;
    this.error = false;
    this.$http = $http;
  }


  fetchFromServer() {
    this.error = false;

    this.$http.get('/list')
      .success((data) => { this.users = data.admins;})
      .error(() => this.error = true);
  }
}

module.exports = ExampleController;
