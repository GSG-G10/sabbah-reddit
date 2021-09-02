const addCommentQu = require('./add-comment');
const addUserQu = require('./add-user');
const createPostQu = require('./create-post');
const deletePostQu = require('./delete-post');
const deleteCommentQu = require('./get-comments');
const getCommentsQu = require('./get-comments');
const { getPostsQu, getSinglePost } = require('./get-posts');
const getUsersQu = require('./get-users');
const getUsersPosts = require('./get-users-posts');
const getUser = require('./get-user');
const checkIfMember = require('./checkIfMember');

module.exports = {
  addCommentQu,
  addUserQu,
  createPostQu,
  deletePostQu,
  deleteCommentQu,
  getCommentsQu,
  getPostsQu,
  getSinglePost,
  getUsersQu,
  getUsersPosts,
  getUser,
  checkIfMember,
};
