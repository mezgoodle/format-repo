const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');
const {myError, options} = require('./utils/config');
const {formatJS, formatPython} = require('./utils/formatters');

const mainFunc = async () => {
  const pythonFlag = core.getBooleanInput('python', {required: false});
  const token = core.getInput('gitHubToken', {required: true});
  const javascriptFlag = core.getBooleanInput('javascript', {
    required: false,
  });
  const payload = github.context.payload;
  const projectFolder = core.getInput('projectFolder') || '.';
  if (pythonFlag) {
    await formatPython(projectFolder);
  }
  if (javascriptFlag) {
    await formatJS(projectFolder);
  }
  await exec.exec(`git config --global user.name ${payload.pusher.name}`);
  await exec.exec(`git config --global user.email  ${payload.pusher.email}`);
  await exec.exec('git commit -am "Automated report"', [], options);
  await exec.exec('git status', [], options);
  await exec.exec(`git push https://oauth2:${token}@github.com/${payload.repository.full_name}.git`, [], options);
};

try {
  mainFunc();
} catch (error) {
  core.info(myError);
  core.setFailed(error.message);
}
