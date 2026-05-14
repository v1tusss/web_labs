import img from "../assets/img/vozmojnosti.png";
import vozmojnostiData from "../mockData/vozmojnostiData";

export const VozmojnostiImage = ({ src, alt }) => (
  <div className="vozmojnosti_img">
    <img src={src} alt={alt} />
  </div>
);

export const VozmojnostiText = ({ vozmojnostiTextData }) => {
  const { topText, title, text, link } = vozmojnostiTextData;

  return (
    <div className="vozmojnosti_text">
      <p className="mini_text">{topText}</p>

      <h2 className="vozmojnosti_title">{title}</h2>

      <p className="vozmojnosti_info">{text}</p>

      <a href="#early-access" className="orange_text">
        {link}
      </a>
    </div>
  );
};

const Vozmojnosti = () => {
  return (
    <div className="vozmojnosti_container">
      <VozmojnostiImage src={img} alt="vozmojnosti" />
      <VozmojnostiText vozmojnostiTextData={vozmojnostiData} />
    </div>
  );
};

export default Vozmojnosti;
