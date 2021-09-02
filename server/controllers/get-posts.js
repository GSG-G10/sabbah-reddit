const { getPostsQu } = require('../database/queries');

const getPosts = (req, res) => {
  getPostsQu()
    .then((rows) => {
      res.json(rows);
    }).catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = getPosts;
