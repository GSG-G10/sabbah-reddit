const router = require('express').Router();
const getProfile = require('./profile');
const auth = require('./authorization');
const posts = require('./home');
const {
  clientError,
  serverError,
} = require('../controllers');

router.use(auth);
router.use(getProfile);
router.use(posts);

// Errors
router.use(clientError);
router.use(serverError);

module.exports = router;
