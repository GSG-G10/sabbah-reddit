const { getCommentsQu } = require('../database/queries');

const getComments = (id) => {
  getCommentsQu(id).then((data) => {
    res.json(data);
  }).catch((err) => {
    console.log(err.message);
  });
};

module.exports = getComments;
