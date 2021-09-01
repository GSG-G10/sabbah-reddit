const connection = require('../config/connection');

const deletePost = (postId) => connection.query('DELETE FROM posts WHERE id = $1', [postId]);

module.exports = deletePost;
