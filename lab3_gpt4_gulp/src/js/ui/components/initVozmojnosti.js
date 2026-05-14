import vozmojnostiData from "../../mockData/vozmojnostiData.js";
import { vozmojnostiTemplate } from "../templates/vozmojnostiTemplate.js";

const initVozmojnosti = (vozmojnostiNode) => {
  vozmojnostiNode.insertAdjacentHTML(
    "beforeend",
    vozmojnostiTemplate(vozmojnostiData)
  );
};

export default initVozmojnosti;
