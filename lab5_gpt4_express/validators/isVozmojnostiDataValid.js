const { isObjectHasProps } = require("./utils/validators");

const isVozmojnostiDataValid = (data) => {
  isObjectHasProps(data, ["img", "alt", "topText", "title", "text", "link"]);

  isObjectHasProps(data.link, ["title", "href"]);
};

module.exports = isVozmojnostiDataValid;