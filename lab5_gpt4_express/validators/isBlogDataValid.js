const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isPostValid = (post) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(post, ["img", "alt", "date", "title", "link"]);

  const { link } = post;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(link, ["title", "href"]);
};

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["title", "titleSecond", "bigPost", "smallPosts"]);

  const { bigPost, smallPosts } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isPostValid(bigPost);

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(smallPosts);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  smallPosts.forEach((post) => isPostValid(post));
};

module.exports = isBlogDataValid;
