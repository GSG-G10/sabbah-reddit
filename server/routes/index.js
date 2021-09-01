const router = require('express').Router();
const getProfile = require('./profile');
const auth = require('./authorization');
const posts = require('./home');

// router.post('/signup', auth);
router.use(auth);
router.get('/profile', getProfile);
router.use(posts);

module.exports = router;
