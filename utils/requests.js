const http = require('@actions/http-client');


class Api {
  constructor(clientName) {
    this.client = new http.HttpClient(clientName);
  }
}

module.exports = Api;
