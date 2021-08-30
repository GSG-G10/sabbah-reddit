const { join } = require('path');

const clientError = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'pages', '404.html'));
  next();
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'pages', '500.html'));
  next();
};

module.exports = {
  clientError,
  serverError,
};
