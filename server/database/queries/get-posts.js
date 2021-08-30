const connection = require('../config/connection');

const getPostsQuery = () => connection.query('SELECT posts.*, users.first_name, users.last_name FROM posts INNER JOIN users ON users.username = posts.user_name ORDER BY likes DESC;').then((data) => data.rows);

module.exports = getPostsQuery;
