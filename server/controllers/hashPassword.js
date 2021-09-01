const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  console.log(password);
  return bcrypt.hash(password, 10);
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

module.exports = {
  comparePasswords,
  hashPassword,
};
