const exec = require('@actions/exec');
const {options} = require('./config');

const gitAction =async (payload, token) => {
  await exec.exec(`git config --global user.name ${payload.pusher.name}`);
  await exec.exec(`git config --global user.email  ${payload.pusher.email}`);
  await exec.exec('git commit -am "Automated format"', [], options);
  try {
    await exec.exec(`git push https://oauth2:${token}@github.com/${payload.repository.full_name}.git`, [], options);
  } catch (error) {
    console.log("Error with push");
  }
};

module.exports = {gitAction};
