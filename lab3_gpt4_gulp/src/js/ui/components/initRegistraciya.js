import registraciyaData from "../../mockData/registraciyaData.js";
import registraciyaTemplate from "../templates/registraciyaTemplate.js";

const initRegistraciya = (node) => {
  node.innerHTML = registraciyaTemplate(registraciyaData);
};

export default initRegistraciya;