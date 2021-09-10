const router = require('express').Router();
const { join } = require('path');
const { getPosts, dislike, like } = require('../controllers');
const { authCheck } = require('../middlewares');

router.get('/home', authCheck, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'pages', 'home.html'));
});
router.get('/posts', getPosts);
router.put('/like', authCheck, like);
router.put('/dislike', authCheck, dislike);

module.exports = router;
