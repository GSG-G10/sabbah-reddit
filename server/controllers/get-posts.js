const { getPostsQu } = require('../database/queries');

const getPosts = (req, res) => {
  getPostsQu()
    .then((rows) => {
      console.log(rows);
      res.json(rows);
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = getPosts;
