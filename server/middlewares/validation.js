const joi = require('joi');

// signup input Validation
const signupValidation = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(5).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(6).required(),
    firstName: joi.string().alphanum().max(30).required(),
    lastName: joi.string().alphanum().max(30),
  });
  schema.validateAsync(req.body)
    .then(() => {
      next();
    }).catch((err) => {
      res.json({ message: err.message });
    });
};

// login input Validation
const loginValidation = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(5).max(30).required(),
    password: joi.string().alphanum().min(6).required(),
  });
  schema.validateAsync(req.body)
    .then(() => {
      next();
    }).catch((err) => {
      res.json({ message: err.message });
    });
};

module.exports = { signupValidation, loginValidation };
