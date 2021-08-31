const createSession = require('./create-session');

const login = (req, res) => {
  const { username, email } = req.body;
  res.cookie('token', createSession(username, email), { httpOnly: true, secure: true });
  res.cookie('username', username);
  res.redirect('/');
};

module.exports = login;
