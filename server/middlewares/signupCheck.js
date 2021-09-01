const { getUser } = require('../database/queries');

const checkIfMember = (req, res, next) => {
  const { username, email } = req.body;
  getUser(username, email) // query to check if email or password exist in the database
    .then((row) => {
      if (row) {
        res.send('username or email exists').redirect('/signup');
      } else {
        next();
      }
    });
};

module.exports = checkIfMember;
