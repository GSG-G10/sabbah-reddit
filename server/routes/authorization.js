const router = require('express').Router();
const { createUser, login, logout } = require('../controllers');

router.post('/signup', createUser);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
