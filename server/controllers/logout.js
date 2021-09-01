const logout = (req, res) => {
  res.clearCookie('username');
  res.clearCookie('token');
  res.redirect('/');
};

module.exports = logout;
