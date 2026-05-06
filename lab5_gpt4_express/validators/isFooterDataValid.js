const { isObjectHasProps } = require("./utils/validators");

const isLinkValid = (link) => {
  isObjectHasProps(link, ["title", "href"]);
};

const isFooterColumnValid = (column) => {
  isObjectHasProps(column, ["title", "links"]);

  if (!Array.isArray(column.links)) {
    throw new Error("links должен быть массивом");
  }

  column.links.forEach((link) => {
    isLinkValid(link);
  });
};

const isFooterDataValid = (data) => {
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

  isObjectHasProps(data.button, ["title", "href"]);

  if (!Array.isArray(data.address)) {
    throw new Error("address должен быть массивом");
  }

  if (!Array.isArray(data.columns)) {
    throw new Error("columns должен быть массивом");
  }

  data.columns.forEach((column) => {
    isFooterColumnValid(column);
  });
};

module.exports = isFooterDataValid;