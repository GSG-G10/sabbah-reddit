const router = require('express').Router();
const getProfile = require('./profile');

router.get('/profile', getProfile);

module.exports = router;
