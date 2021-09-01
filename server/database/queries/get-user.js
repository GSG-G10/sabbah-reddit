const connection = require('../config/connection');

const getUser = (username) => connection.query('SELECT * FROM users WHERE username = $1', [username]).then((data) => data.rows[0]);

module.exports = getUser;
