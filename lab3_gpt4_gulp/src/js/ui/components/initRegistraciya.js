import registraciyaData from "../../mockData/registraciyaData.js";
import { registraciyaTemplate } from "../templates/registraciyaTemplate.js";

const initRegistraciya = (registraciyaNode) => {
  registraciyaNode.insertAdjacentHTML(
    "beforeend",
    registraciyaTemplate(registraciyaData)
  );
};

export default initRegistraciya;
