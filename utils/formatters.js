const exec = require('@actions/exec');
const {options} = require('./config');

const formatJS = async () => {
  await exec.exec('npx prettier --write src/', [], options);
};

const formatPython = async () => {
  await exec.exec('pip install black', [], options);
  await exec.exec('black src/', [], options);
};

module.exports = {
  formatJS,
  formatPython,
};
