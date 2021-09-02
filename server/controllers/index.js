const getProfile = require('./getProfile');
const createUser = require('./signup');
const login = require('./login');
const logout = require('./logout');
const createSession = require('./create-session');
const getPosts = require('./get-posts');
const createPost = require('./create-post');
const deletePost = require('./delete-post');
const createComment = require('./create-comment');
const deleteComment = require('./delete-comment');
const { like, dislike } = require('./likes');
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
  deletePost,
  createComment,
  deleteComment,
  like,
  dislike,
  clientError,
  serverError,
};
