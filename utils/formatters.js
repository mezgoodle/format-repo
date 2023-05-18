const exec = require('@actions/exec');
const {options} = require('./config');

const formatJS = async () => {
  await exec.exec('npx prettier --write .', [], options);
};

const formatPython = async () => {
  await exec.exec('pip install black', [], options);
  await exec.exec('black .', [], options);
};

module.exports = {
  formatJS,
  formatPython,
};
