const connection = require('../config/connection');

const addComment = (username, postId, comment) => connection.query('INSERT INTO comments(user_name, post_id, comment_text) VALUES ($1, $2, $3) RETURNING *;', [username, postId, comment]).then((data) => data.rows[0]);

module.exports = addComment;
