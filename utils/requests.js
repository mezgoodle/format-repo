const http = require('@actions/http-client');


class Api {
  constructor(clientName) {
    this.client = new http.HttpClient(clientName);
  }

  async checkRepository(name) {
    const response = await this.client.get(`https://gitlab.com/api/v4/projects/${name}`);
    const body = await response.readBody();
    const obj = JSON.parse(body);
    return obj;
  }
}

module.exports = Api;
