const path = require('path');

module.exports = (req, res) => {
  return res.sendFile(path.join(process.cwd() + '/sounds/kick.wav'));
};