const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const {myOutput, myError, options} = require('./utils/config');

const mainFunc = async () => {
  // `who-to-greet` input defined in action metadata file
  core.info('Show git command');
  await exec.exec('python --version', [], options);
  await exec.exec('npm --version', [], options);
  await exec.exec('pip --version', [], options);
  console.log(myOutput);
  console.log(myError);
  core.info('Getting the variables');
  core.info('Show git command');
  const gitlabToken = core.getInput('gitlabToken', {required: false});
  console.log(`GitLab token: ${gitlabToken}!`);
  const bitbucketToken = core.getInput('bitbucketToken', {required: false});
  console.log(`BitBucket Token: ${bitbucketToken}!`);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  // const commitMessage = payload.commits[0].message;
  // const branchName = payload.ref.split('/').pop();
  // Get the JSON webhook payload for the event that triggered the workflow

  console.log(`The event payload: ${payload}`);
};

try {
  mainFunc();
} catch (error) {
  core.setFailed(error.message);
}
