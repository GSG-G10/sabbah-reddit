const connection = require('../config/connection');

const getComments = (postId) => connection.query('SELECT * FROM comments WHERE post_id = $1;', [postId]).then((data) => data.rows);

module.exports = getComments;
