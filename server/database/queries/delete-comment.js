const connection = require('../config/connection');

const deleteCommentQu = (id) => connection.query('DELETE FROM comments WHERE id = $1 RETURNING *;', [id]);

module.exports = deleteCommentQu;
