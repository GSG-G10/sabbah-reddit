const connection = require('../config/connection');

const getUsersQuery = () => {
  connection.query('SELECT * FROM users;');
};

module.exports = getUsersQuery;
