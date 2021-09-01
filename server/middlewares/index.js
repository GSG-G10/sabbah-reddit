const checkIfMember = require('./signupCheck');
const authCheck = require('./auth');
const { signupValidation, loginValidation } = require('./validation');

module.exports = {
  checkIfMember,
  authCheck,
  signupValidation,
  loginValidation,
};
