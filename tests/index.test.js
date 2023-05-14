const wait = require('../wait');
const _http = require("../utils/requests");
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws invalid number', async () => {
  await expect(wait('foo')).rejects.toThrow('milliseconds not a number');
});

test('wait 500 ms', async () => {
  const start = new Date();
  await wait(500);
  const end = new Date();
  const delta = Math.abs(end - start);
  expect(delta).toBeGreaterThanOrEqual(500);
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_GITLABTOKEN'] = 'gitlab token';
  process.env['INPUT_BITBUCKETTOKEN'] = 'bitbucket token';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.exec(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
});

test('request tests', () => {
  const http = _http;
  expect(http).toBeDefined()
})
