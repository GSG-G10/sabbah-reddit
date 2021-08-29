const connection = require('../config/connection');

const addComment = (username, postId, comment) => {
  connection.query('INSERT INTO comments(user_name, post_id, comment_text) VALUES ($1, $2, $3)', [username, postId, comment]);
};

module.exports = addComment;
