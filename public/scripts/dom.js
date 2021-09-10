const postConntainer = document.querySelector('.container');

// generic function to create html elements
const createElement = (tag, className, parent, text) => {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);
  if (tag === 'img') {
    ele.src = text;
  } else {
    ele.textContent = text;
  }
  return ele;
};

const createPost = (data) => {
  // create the post
  const postCard = createElement('div', 'post-card', postConntainer, '');
  const {
    id, username, first_name, last_name, post_text, image_url, likes,
  } = data;
  createElement('h2', 'fulname', postCard, (first_name + last_name));
  createElement('p', 'username', postCard, username);
  createElement('p', 'post-content', postCard, post_text);
  if (image_url) {
    createElement('img', 'image', postCard, image_url);
  }
  // store the post id
  const postId = createElement('input', 'post_id', postCard, '');
  postId.type = 'hidden';
  postId.value = id;
  postId.name = 'postId';
  // like & comment buttons
  const btnsContainer = createElement('div', 'btns', postCard, '');
  const likesCont = createElement('div', 'likes-btn', btnsContainer, '');
  const likeBtn = createElement('button', 'like-button', likesCont, 'Like');
  //   createElement('i', 'fas fa-heart', likeBtn, '');
  createElement('p', 'likes-num', likesCont, likes);
  const commentBtn = createElement('button', 'comment-button', btnsContainer, 'Comments');
  //   createElement('i', 'far fa-comment', commentBtn, '');
  return postCard;
};

const createComments = (post, comments) => {
  const commentContainer = createElement('div', 'comments-container', post, '');
  const form = createElement('form', 'comment-form', commentContainer, '');
  const commentLabel = createElement('label', '', form, '');
  const textArea = createElement('textarea', '', commentLabel, '');
  textArea.id = 'textarea';
  textArea.name = 'commentText';
  textArea.cols = '30';
  textArea.rows = '5';
  textArea.placeholder = 'Type your comment here';
  const submitComment = createElement('button', 'save', form, 'Add Comment');
  submitComment.type = 'submit';
  const commentBox = createElement('div', 'comment-box', post, '');
  createElement('h5', '', commentBox, comments.username);
  createElement('p', 'comment', commentBox, comments.comment_text);
};
