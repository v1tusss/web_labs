import footerData from "../mockData/footerData";

const FooterColumn = ({ column }) => {
  return (
    <div className="footer_col">
      <h4 className="footer_name">{column.title}</h4>

      {column.links.map((item, index) => (
        <a href="#footer" className="footer_link" key={index}>
          {item}
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="footer_top">
        <h2 className="footer_big_title">
          {footerData.title}
          <br />
          {footerData.titleSecond}
        </h2>

        <a href="#early-access" className="footer_btn">
          {footerData.button}
        </a>
      </div>

      <div className="footer_middle">
        <div className="footer_col footer_logo_col">
          <h3 className="footer_logo">{footerData.logo}</h3>

          <p className="footer_text">
            {footerData.address[0]}
            <br />
            {footerData.address[1]}
          </p>

          <p className="footer_text">{footerData.rights}</p>
        </div>

        {footerData.columns.map((column, index) => (
          <FooterColumn column={column} key={index} />
        ))}
      </div>

      <div className="footer_bottom">
        <p className="footer_copy">{footerData.copy}</p>
      </div>
    </>
  );
};

export default Footer;