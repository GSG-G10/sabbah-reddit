const { addUserQu } = require('../database/queries');
const { hashPassword } = require('./hashPassword');
const { createSession } = require('./index');

const createUser = (req, res) => {
  const {
    username, firstName, lastName, email, password,
  } = req.body;
  hashPassword(password).then((hashedPass) => {
    const userObj = {
      username,
      firstName,
      lastName,
      email,
      hashedPass,
    };
    return userObj;
  })
    .then((obj) => {
      addUserQu(obj)
        .then(() => {
          res.cookie('token', createSession(username, email), { httpOnly: true, secure: true });
          res.cookie('username', username);
          res.redirect('/');
        }).catch((err) => {
          res.status(500).json(err.message);
        });
    }).catch((err) => res.json(err.message));
};

module.exports = createUser;
