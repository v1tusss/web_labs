import img from "../assets/img/vozmojnosti.png";
import vozmojnostiData from "../mockData/vozmojnostiData";

const Vozmojnosti = () => {
  return (
    <div className="vozmojnosti_container">
      <div className="vozmojnosti_img">
        <img src={img} alt="vozmojnosti" />
      </div>

      <div className="vozmojnosti_text">
        <p className="mini_text">{vozmojnostiData.topText}</p>

        <h2 className="vozmojnosti_title">{vozmojnostiData.title}</h2>

        <p className="vozmojnosti_info">{vozmojnostiData.text}</p>

        <a href="#early-access" className="orange_text">
          {vozmojnostiData.link}
        </a>
      </div>
    </div>
  );
};

export default Vozmojnosti;