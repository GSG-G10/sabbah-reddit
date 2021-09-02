const { addLike, disLike } = require('../database/queries');

const like = (req, res) => {
  const { postId } = req.body;

  addLike(postId)
    .then(() => {
      res.end();
    })
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
};

const dislike = (req, res) => {
  const { postId } = req.body;
  disLike(postId)
    .then(() => {
      res.end();
    })
    .catch(() => {
      res.status(500).json('internal server error');
    });
};

module.exports = { like, dislike };
