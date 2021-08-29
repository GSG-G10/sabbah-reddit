const connection = require('../config/connection');

const addUserQuery = (userObject) => {
  connection.query('INSERT INTO users(username, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5);', [userObject.username, userObject.firstName, userObject.lastName, userObject.email, userObject.password]);
};

module.exports = addUserQuery;
