const { deleteCommentQu } = require('../database/queries');

const deleteComment = (req, res) => {
  const { commentId } = req.body;
  deleteCommentQu(commentId).then(() => {
    res.end();
  }).catch(() => {
    res.status(500).json({ message: 'internal server error' });
  });
};

module.exports = deleteComment;
