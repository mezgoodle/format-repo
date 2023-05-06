const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  core.info('Getting the variables');
  const gitlabToken = core.getInput('gitlabToken', {'required': false});
  console.log(`GitLab token: ${gitlabToken}!`);
  const bitbucketToken = core.getInput('bitbucketToken', {'required': false});
  console.log(`BitBucket Token: ${bitbucketToken}!`);
  const time = new Date().toTimeString();
  core.info('Setting the time as output');
  core.setOutput('time', time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
