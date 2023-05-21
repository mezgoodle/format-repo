const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');
const {myError, options} = require('./utils/config');
const {formatJS, formatPython} = require('./utils/formatters');

const mainFunc = async () => {
  const myToken = core.getInput('gitHubToken', {required: true});
  const pythonFlag = core.getBooleanInput('python', {required: false});
  const javascriptFlag = core.getBooleanInput('javascript', {
    required: false,
  });
  const projectFolder = core.getInput('projectFolder') || '.';
  if (pythonFlag) {
    await formatPython(projectFolder);
  }
  if (javascriptFlag) {
    await formatJS(projectFolder);
  }
  const payload = github.context.payload;
  const octokit = github.getOctokit(myToken);
  await octokit.rest.git.createCommit({
    owner: payload.repository.owner.login,
    repo: payload.repository.name,
    message: 'Format code',
    tree: payload.commits[0].tree_id,
  });
  await exec.exec('git status', [], options);
};

try {
  mainFunc();
} catch (error) {
  core.info(myError);
  core.setFailed(error.message);
}
