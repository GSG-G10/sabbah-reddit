const { sign } = require('jsonwebtoken');
const { addUserQu } = require('../database/queries');
const { hashPassword } = require('./hashPassword');

const createUser = (req, res) => {
  const {
    username, firstName, lastName, email, password,
  } = req.body;
  hashPassword(password).then((hashedPass) => {
    console.log(hashedPass);
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
      console.log(obj);
      addUserQu(obj)
        .then(() => {
          const createSession = (userName, emailInput) => {
            const cookiePayload = {
              userName,
              emailInput,
            };
            const cookie = sign(cookiePayload, process.env.SECRET_KEY);
            return cookie;
          };
          res.cookie('token', createSession(username, email), { httpOnly: true, secure: true });
          res.cookie('username', username);
          res.redirect('/');
        }).catch((err) => {
          console.log(err.message);
          res.status(500).json(err.message);
        });
    }).catch((err) => res.json(err.message));
};

module.exports = createUser;
