const connection = require('../config/connection');

const getUser = (username, email) => connection.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]).then((data) => data.rows[0]);

module.exports = getUser;
