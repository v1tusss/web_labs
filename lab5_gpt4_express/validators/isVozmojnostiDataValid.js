const { isObjectHasProps } = require("./utils/validators");

const isVozmojnostiDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["img", "alt", "topText", "title", "text", "link"]);

  const { link } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(link, ["title", "href"]);
};

module.exports = isVozmojnostiDataValid;
