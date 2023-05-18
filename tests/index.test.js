const process = require("process");
const cp = require("child_process");
const path = require("path");

// shows how the runner will run a javascript action with env / stdout protocol
test("test runs", () => {
  process.env["INPUT_GITLABTOKEN"] = "gitlab token";
  process.env["INPUT_BITBUCKETTOKEN"] = "bitbucket token";
  const ip = path.join(__dirname, "index.js");
  const result = cp.exec(`node ${ip}`, { env: process.env }).toString();
  console.log(result);
});
