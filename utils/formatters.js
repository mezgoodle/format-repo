const exec = require('@actions/exec');
const {options} = require('./config');

const formatJS = async (projectFolder) => {
  await exec.exec(`npx prettier --write ${projectFolder}`, [], options);
};

const formatPython = async (projectFolder) => {
  await exec.exec('pip install black', [], options);
  await exec.exec(`black ${projectFolder}`, [], options);
};

module.exports = {
  formatJS,
  formatPython,
};
