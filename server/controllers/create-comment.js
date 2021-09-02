const { addCommentQu } = require('../database/queries');

const createComment = (req, res) => {
  const { postId, commentText } = req.body;
  const { username } = req.cookies;
  addCommentQu(username, postId, commentText)
    .then((data) => {
      res.json(data);
    }).catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
};

module.exports = createComment;
