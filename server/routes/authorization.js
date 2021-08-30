const router = require('express').Router();
const { createUser } = require('../controllers');

router.post('/signup', createUser);

module.exports = router;
