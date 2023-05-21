const core = require('@actions/core');
const exec = require('@actions/exec');
const {myError, options} = require('./utils/config');
const {formatJS, formatPython} = require('./utils/formatters');

const mainFunc = async () => {
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
  await exec.exec('git commit -am "Automated report"', [], options);
  await exec.exec('git status', [], options);
  await exec.exec('git push', [], options);
};

try {
  mainFunc();
} catch (error) {
  core.info(myError);
  core.setFailed(error.message);
}
