const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const {myOutput, myError} = require('./utils/config');

const mainFunc = async () => {
  // `who-to-greet` input defined in action metadata file
  core.info('Show git command');
  await exec.exec({commandLine: 'git status', options: options});
  console.log(myOutput);
  console.log(myError);
  core.info('Getting the variables');
  core.info('Show git command');
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
};

try {
  mainFunc();
} catch (error) {
  core.setFailed(error.message);
}
