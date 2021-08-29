const connection = require('../config/connection');

const getComments = (postId) => {
  connection.query('SELECT comments.*, users.first_name, users.last_name FROM comments INNER JOIN users ON users.username = comments.user_name WHERE post_id = $1', [postId]);
};

module.exports = getComments;
