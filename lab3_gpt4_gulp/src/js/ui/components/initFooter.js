import footerData from "../../mockData/footerData.js";
import footerTemplate from "../templates/footerTemplate.js";

const initFooter = (node) => {
  node.innerHTML = footerTemplate(footerData);
};

export default initFooter;