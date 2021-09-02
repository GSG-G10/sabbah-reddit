const getProfile = require('./getProfile');
const createUser = require('./signup');
const login = require('./login');
const logout = require('./logout');
const createSession = require('./create-session');
const getPosts = require('./get-posts');
const createPost = require('./create-post');
const createComment = require('./create-comment');
const deleteComment = require('./delete-comment');
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
  createComment,
  deleteComment,
  clientError,
  serverError,
};
