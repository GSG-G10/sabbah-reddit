const { verify } = require('jsonwebtoken');
require('env2')('.env')

const authCheck = (req, res, next) => {
  const { token } = req.cookies;
  if (!req.cookies) return res.status(401).redirect('/login');
  if (!token) return res.status(401).redirect('/login');
  verify(token, process.env.SECRET_KEY, () => {
    next();
  });
};

module.exports = authCheck;
