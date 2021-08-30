const connection = require('../config/connection');

const getUsersQuery = () => connection.query('SELECT * FROM users;').then((data) => data.rows);

module.exports = getUsersQuery;
