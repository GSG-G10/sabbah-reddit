const { getUsersPosts } = require('../database/queries');

const getProfile = (req, res) => {
  const { username } = req.params;
  getUsersPosts(username).then((data) => {
    res.json(data);
  }).catch((err) => {
    res.status(500).json({ message: err.message });
  });
};

module.exports = getProfile;
