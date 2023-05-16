const http = require('@actions/http-client');


class Api {
  constructor(clientName, token, username) {
    this.client = new http.HttpClient(clientName);
    this.token = token;
    this.username = username;
  }

  async checkRepository(projectName) {
    const response = await this.client.get(`https://gitlab.com/api/v4/projects/${this.username}%2F${projectName}`);
    const body = await response.readBody();
    const obj = JSON.parse(body);
    return obj;
  }
}

module.exports = Api;
