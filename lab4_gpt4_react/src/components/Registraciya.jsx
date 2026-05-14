import registraciyaData from "../mockData/registraciyaData";

export const RegistraciyaText = ({ registraciyaTextData }) => {
  const { smallText, title } = registraciyaTextData;

  return (
    <div className="registraciya_text">
      <p className="registraciya_mini">{smallText}</p>

      <h3 className="registraciya_title">{title}</h3>
    </div>
  );
};

export const RegistraciyaButton = ({ title }) => {
  return (
    <div className="registraciya_btn_box">
      <button className="registraciya_btn">{title}</button>
    </div>
  );
};

const Registraciya = () => {
  const { button } = registraciyaData;

  return (
    <div className="registraciya_box">
      <RegistraciyaText registraciyaTextData={registraciyaData} />
      <RegistraciyaButton title={button} />
    </div>
  );
};

export default Registraciya;
