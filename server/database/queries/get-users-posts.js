const connection = require('../config/connection');

const getUsersPosts = (username) => {
  connection.query('SELECT * FROM posts WHERE user_name = $1', [username]);
};

module.exports = getUsersPosts;
