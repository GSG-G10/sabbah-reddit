const connection = require('../config/connection');

const createPostQu = (username, post, image, likes) => connection.query('INSERT INTO posts(user_name, post_text, image_url, likes) VALUES ($1, $2, $3, $4) RETURNING *;', [username, post, image, likes]).then((data) => data.rows[0]);

module.exports = createPostQu;
