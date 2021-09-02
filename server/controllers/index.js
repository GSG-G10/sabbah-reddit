const getProfile = require('./getProfile');
const createUser = require('./signup');
const login = require('./login');
const logout = require('./logout');
const createSession = require('./create-session');
const getPosts = require('./get-posts');
const createPost = require('./create-post')
const {
  clientError,
  serverError,
} = require('./error');

module.exports = {
  getProfile,
  createUser,
  login,
  createSession,
  logout,
  getPosts,
  createPost,
  clientError,
  serverError,
};
