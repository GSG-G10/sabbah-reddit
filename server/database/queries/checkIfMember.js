const connection = require('../config/connection');

const checkIfMember = (userName, email) => {
  const sql = {
    text: 'SELECT * FROM users WHERE username = $1 OR email = $2',
    values: [userName, email],
  };
  return connection.query(sql).then((data) => data.rows).then((rows) => rows.length !== 0);
};
module.exports = checkIfMember;
