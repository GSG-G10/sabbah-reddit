const getProfile = require('./getProfile');
const createUser = require('./signup');
const login = require('./login');
const logout = require('./logout');
const createSession = require('./create-session');
const getPosts = require('./get-posts')

module.exports = {
  getProfile, createUser, login, createSession, logout, getPosts,
};
