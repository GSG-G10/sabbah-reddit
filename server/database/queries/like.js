const connection = require('../config/connection');

const addLike = (postId) => connection.query('UPDATE posts SET likes = likes + 1 WHERE id = $1;', [postId]);

const disLike = (postId) => connection.query('UPDATE posts SET likes = likes - 1 WHERE id = $1 AND likes > 0;', [postId]);

module.exports = { addLike, disLike };
