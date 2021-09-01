const { getUsersPosts } = require('../database/queries');

const getProfile = (req, res) => {
  const { username } = req.cookies;
  getUsersPosts(username).then((data) => {
    res.json(data);
  }).catch((err) => {
    console.log(err.message);
  });
};

module.exports = getProfile;
