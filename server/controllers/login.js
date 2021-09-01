const createSession = require('./create-session');
const { comparePasswords } = require('./hashPassword');
const { getUser } = require('../database/queries');

const login = (req, res) => {
  const { username, password, email } = req.body;
  getUser(username, email)
    .then((row) => {
      // check if username exists
      if (!row) {
        res.status(401).send('invalid username or password');
      } else {
        // check password
        comparePasswords(password, row.password, (err, data) => {
          if (err) {
            res.status(500).json({ msg: 'internal server error' });
          } else if (data) {
            res.clearCookies('token', 'username');
            res.cookie('token', createSession(username), { httpOnly: true, secure: true });
            res.cookie('username', username);
            res.redirect('/');
          } else res.status(401).send('invalid username or password');
        });
      }
    }).catch(() => {
      res.status(500).json({ msg: 'error' });
    });
};

module.exports = login;
