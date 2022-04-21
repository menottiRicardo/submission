const _ = require("lodash");
const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length === 1) return blogs[0].likes;
  const likes = blogs.reduce((sum, item) => sum + item.likes, 0);
  return likes;
};

const favoriteBlog = (blogs) => {
  const likes = blogs.map((blog) => blog.likes);
  const maxVotes = Math.max(...likes);

  const index = likes.indexOf(maxVotes);
  return blogs[index];
};

const mostBlogs = (blogs) => {
  const authorArray = _.map(blogs, "author");
  const mostCommonAuthor = _.chain(authorArray)
    .countBy()
    .toPairs()
    .max()
    .head()
    .value();

  const blogsNumber = _.chain(authorArray)
    .countBy()
    .toPairs()
    .max()
    .value();

  const result = {
    author: mostCommonAuthor,
    blogs: blogsNumber[1],
  };
  return result;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
