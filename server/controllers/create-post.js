const { createPostQu, getSinglePost } = require('../database/queries');

const createPost = (req, res) => {
  const { postText, imageUrl } = req.body;
  const { username } = req.cookies;
  createPostQu(username, postText, imageUrl, 0)
    .then((data) => {
      const postId = data.id;
      getSinglePost(postId)
        .then((post) => {
          res.json(post);
        });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    });
};

module.exports = createPost;
