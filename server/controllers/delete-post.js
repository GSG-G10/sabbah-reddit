const { deletePostQu, getUsersPosts } = require('../database/queries');

const deletePost = (req, res) => {
  const { username } = req.cookies;
  const { postId } = req.body;
  getUsersPosts(username)
    .then((data) => {
      if (data) {
        deletePostQu(postId);
      } else {
        res.status(405).json({ message: 'Not Allowed' });
      }
    })
    .then(() => {
      res.end();
    })
    .catch(() => {
      res.status(500).json({ message: 'internal server error' });
    });
};

module.exports = deletePost;
