const http = require('@actions/http-client');


class Api {
  constructor(clientName, token, username, projectName) {
    this.client = new http.HttpClient(clientName);
    this.token = token;
    this.username = username;
    this.projectName = projectName;
  }

  async checkRepository() {
    const response = await this.client.get(`https://gitlab.com/api/v4/projects/${this.username}%2F${this.projectName}`);
    const body = await response.readBody();
    const obj = JSON.parse(body);
    return obj;
  }

  async createRepository() {
    const additionalHeaders = {'PRIVATE-TOKEN': this.token};
    const repoInfo = {'name': this.projectName};
    try {
      const response = await this.client.postJson(`https://gitlab.com/api/v4/projects/`, JSON.stringify(repoInfo), additionalHeaders);
      return response.statusCode;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
}

module.exports = Api;
