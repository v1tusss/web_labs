const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isLinkValid = (link) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(link, ["title", "href"]);
};

const isFooterColumnValid = (column) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(column, ["title", "links"]);

  const { links } = column;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(links);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  links.forEach((link) => isLinkValid(link));
};

const isFooterDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "title",
    "titleSecond",
    "button",
    "logo",
    "address",
    "rights",
    "columns",
    "copy",
  ]);

  const { button, address, columns } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["title", "href"]);

  // проверяем внутренние массивы на наличие полей и соответствие типу "массив"
  isArrayHasLength(address);
  isArrayHasLength(columns);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  columns.forEach((column) => isFooterColumnValid(column));
};

module.exports = isFooterDataValid;
