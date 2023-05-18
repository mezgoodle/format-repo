const core = require('@actions/core');
const github = require('@actions/github');
const {myError} = require('./utils/config');
const {formatJS, formatPython} = require('./utils/formatters');

const mainFunc = async () => {
  const myToken = core.getInput('gitHubToken', {required: true});
  const pythonFlag = core.getBooleanInput('python', {required: false});
  const javascriptFlag = core.getBooleanInput('javascript', {
    required: false,
  });
  if (pythonFlag) {
    await formatPython();
  }
  if (javascriptFlag) {
    await formatJS();
  }
  const payload = JSON.stringify(github.context.payload);
  console.log(`The owner: ${payload.repository.owner.login}`);
  const octokit = github.getOctokit(myToken);
  await octokit.rest.git.createCommit({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    message: 'Format code',
    tree: payload.ref.split('/')[2],
  });
};

try {
  mainFunc();
} catch (error) {
  core.info(myError);
  core.setFailed(error.message);
}
