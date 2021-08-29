const connection = require('../config/connection');

const addBookQuery = (username, post, image, likes) => {
  connection.query('INSERT INTO posts(user_name, post_text, image_url, likes) VALUES ($1, $2, $3, $4);', [username, post, image, likes]);
};

module.exports = addBookQuery;
