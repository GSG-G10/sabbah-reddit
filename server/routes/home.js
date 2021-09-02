const router = require('express').Router();
const { getPosts, dislike, like } = require('../controllers');
const { authCheck } = require('../middlewares');

router.get('/posts', getPosts);
router.put('/like', authCheck, like);
router.put('/dislike', authCheck, dislike);

module.exports = router;
