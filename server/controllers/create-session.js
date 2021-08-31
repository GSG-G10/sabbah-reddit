const { sign } = require('jsonwebtoken');
require('env2')('.env');

const createSession = (userName, email) => {
  const cookiePayload = {
    userName,
    email,
  };
  const cookie = sign(cookiePayload, process.env.SECRET_KEY);
  return cookie;
};

module.exports = createSession;
