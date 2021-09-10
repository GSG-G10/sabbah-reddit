const connection = require('../config/connection');

const getPostsQu = () => connection.query('SELECT posts.*, username, users.first_name, users.last_name FROM posts INNER JOIN users ON users.username = posts.user_name ORDER BY likes DESC;').then((data) => data.rows);

const getSinglePost = (postId) => connection.query('SELECT posts.*, username, users.first_name, users.last_name FROM posts INNER JOIN users ON users.username = posts.user_name AND posts.id = $1', [postId]).then((post) => post.rows[0]);

module.exports = { getPostsQu, getSinglePost };
