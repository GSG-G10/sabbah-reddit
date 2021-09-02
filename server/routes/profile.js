const router = require('express').Router();
const {
  getProfile, createPost, createComment, deleteComment, deletePost,
} = require('../controllers');

router.get('/profile', getProfile);
router.post('/create-post', createPost);
router.post('/create-comment', createComment);
router.delete('/delete-comment', deleteComment);
router.delete('/delete-post', deletePost);
module.exports = router;
