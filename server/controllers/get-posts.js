const getPostsQuery = require('../database/queries/get-posts');

const getPosts = (req, res) => {
  getPostsQuery()
    .then((data) => res.json(data.rows))
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ msg: 'internal server error' });
    });
};

module.exports = getPosts;
