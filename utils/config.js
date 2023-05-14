let myOutput = '';
let myError = '';

const options = {};
options.listeners = {
  stdout: (data) => {
    myOutput += data.toString();
  },
  stderr: (data) => {
    myError += data.toString();
  },
};
options.cwd = './lib';

module.exports = {myOutput, myError, options};
