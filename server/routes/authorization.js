const router = require('express').Router();
const { createUser, login, logout } = require('../controllers');
const {
  checkIfMember, authCheck, signupValidation, loginValidation,
} = require('../middlewares');

router.post('/signup', signupValidation, checkIfMember, createUser);
router.post('/login', loginValidation, login);
router.get('/logout', logout);

module.exports = router;
