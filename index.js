const core = require('@actions/core');
const github = require('@actions/github');
const {myError} = require('./utils/config');
const {gitAction} = require('./utils/git');
const {formatJS, formatPython} = require('./utils/formatters');

const mainFunc = async () => {
  core.debug('Taking variables...');
  const token = core.getInput('gitHubToken', {required: true});
  core.info('GitHub token was taken.');
  const pythonFlag = core.getBooleanInput('python', {required: false});
  core.info('Python flag was taken.');
  const javascriptFlag = core.getBooleanInput('javascript', {
    required: false,
  });
  core.info('JavaScript token was taken.');
  const projectFolder = core.getInput('projectFolder') || '.';
  core.info(`Project folder values is "${projectFolder}".`);
  const payload = github.context.payload;
  if (pythonFlag) {
    core.debug('Start formatting Python files...');
    await formatPython(projectFolder);
    core.info('Formatting is over.');
  } else core.info('Python formatting is skipped.');
  if (javascriptFlag) {
    core.debug('Start formatting JavaScript files...');
    await formatJS(projectFolder);
    core.info('Formatting is over.');
  } else core.info('JavaScript formatting is skipped.');
  core.debug('Commit changes...');
  await gitAction(payload, token);
};

try {
  mainFunc();
} catch (error) {
  core.info(myError);
  core.setFailed(error.message);
}
