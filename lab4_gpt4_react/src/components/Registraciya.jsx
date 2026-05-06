import registraciyaData from "../mockData/registraciyaData";

const Registraciya = () => {
  return (
    <div className="registraciya_box">
      <div className="registraciya_text">
        <p className="registraciya_mini">{registraciyaData.smallText}</p>

        <h3 className="registraciya_title">{registraciyaData.title}</h3>
      </div>

      <div className="registraciya_btn_box">
        <button className="registraciya_btn">{registraciyaData.button}</button>
      </div>
    </div>
  );
};

export default Registraciya;