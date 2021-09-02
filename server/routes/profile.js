const router = require('express').Router();
const { getProfile, createPost } = require('../controllers');

router.get('/profile', getProfile);
router.post('/create-post', createPost);

module.exports = router;
