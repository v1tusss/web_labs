const { isObjectHasProps } = require("./utils/validators");

const isPostValid = (post) => {
  isObjectHasProps(post, ["img", "alt", "date", "title", "link"]);
  isObjectHasProps(post.link, ["title", "href"]);
};

const isBlogDataValid = (data) => {
  isObjectHasProps(data, ["title", "titleSecond", "bigPost", "smallPosts"]);

  isPostValid(data.bigPost);

  if (!Array.isArray(data.smallPosts)) {
    throw new Error("smallPosts должен быть массивом");
  }

  data.smallPosts.forEach((post) => {
    isPostValid(post);
  });
};

module.exports = isBlogDataValid;