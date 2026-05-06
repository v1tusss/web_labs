import vozmojnostiData from "../../mockData/vozmojnostiData.js";
import vozmojnostiTemplate from "../templates/vozmojnostiTemplate.js";

const initVozmojnosti = (node) => {
  node.innerHTML = vozmojnostiTemplate(vozmojnostiData);
};

export default initVozmojnosti;