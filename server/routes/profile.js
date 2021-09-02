const router = require('express').Router();
const {
  getProfile, createPost, createComment, deleteComment,
} = require('../controllers');

router.get('/profile', getProfile);
router.post('/create-post', createPost);
router.post('/create-comment', createComment);
router.post('/delete-comment', deleteComment);
module.exports = router;
