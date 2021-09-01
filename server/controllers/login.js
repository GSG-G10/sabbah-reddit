const createSession = require('./create-session');
const { comparePasswords } = require('./hashPassword');
const { getUser } = require('../database/queries');

const login = (req, res) => {
  const { username, password } = req.body;
  getUser(username)
    .then((row) => {
      comparePasswords(password, row.password, (err, data) => {
        if (err) {
          res.status(500).json({ msg: 'internal server error' });
        } else if (data) {
          res.cookie('token', createSession(username), { httpOnly: true, secure: true });
          res.cookie('username', username);
          res.redirect('/');
        } else res.json({ msg: 'invalid password' });
      });
    }).catch((err) => {
      console.log(err);
      res.json({ msg: 'error' });
    });
};

module.exports = login;
