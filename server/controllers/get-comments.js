const { getCommentsQu } = require('../database/queries');

const getComments = (req, res) => {
  const { postId } = req.params;
  getCommentsQu(postId).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(500).json({ message: err.message });
  });
};

module.exports = getComments;
