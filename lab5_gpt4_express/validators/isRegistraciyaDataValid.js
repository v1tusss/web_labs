const { isObjectHasProps } = require("./utils/validators");

const isRegistraciyaDataValid = (data) => {
  isObjectHasProps(data, ["smallText", "title", "button"]);

  isObjectHasProps(data.button, ["title"]);
};

module.exports = isRegistraciyaDataValid;