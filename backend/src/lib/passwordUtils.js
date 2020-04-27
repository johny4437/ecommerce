const bcrypt = require('bcryptjs');
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
function createUser (password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return {
    salt:salt,
    hash: hash
}
}

module.exports = {
  comparePass,
  createUser
};