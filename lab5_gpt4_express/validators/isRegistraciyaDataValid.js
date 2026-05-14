const { isObjectHasProps } = require("./utils/validators");

const isRegistraciyaDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["smallText", "title", "button"]);

  const { button } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["title"]);
};

module.exports = isRegistraciyaDataValid;
