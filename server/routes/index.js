const router = require('express').Router();
const getProfile = require('./profile');
const createUser = require('./authorization')

router.post('/signup', createUser)
router.get('/profile', getProfile);

module.exports = router;
