import footerData from "../mockData/footerData";

export const FooterColumn = ({ column }) => {
  const { title, links } = column;

  return (
    <div className="footer_col">
      <h4 className="footer_name">{title}</h4>

      {links.map((item, index) => (
        <a href="#footer" className="footer_link" key={index}>
          {item}
        </a>
      ))}
    </div>
  );
};

export const FooterTop = ({ footerTopData }) => {
  const { title, titleSecond, button } = footerTopData;

  return (
    <div className="footer_top">
      <h2 className="footer_big_title">
        {title}
        <br />
        {titleSecond}
      </h2>

      <a href="#early-access" className="footer_btn">
        {button}
      </a>
    </div>
  );
};

export const FooterLogo = ({ logoData }) => {
  const { logo, address, rights } = logoData;

  return (
    <div className="footer_col footer_logo_col">
      <h3 className="footer_logo">{logo}</h3>

      <p className="footer_text">
        {address[0]}
        <br />
        {address[1]}
      </p>

      <p className="footer_text">{rights}</p>
    </div>
  );
};

export const FooterMiddle = ({ footerMiddleData }) => {
  const { columns } = footerMiddleData;

  return (
    <div className="footer_middle">
      <FooterLogo logoData={footerMiddleData} />

      {columns.map((column, index) => (
        <FooterColumn column={column} key={index} />
      ))}
    </div>
  );
};

const Footer = () => {
  const { copy } = footerData;

  return (
    <>
      <FooterTop footerTopData={footerData} />
      <FooterMiddle footerMiddleData={footerData} />

      <div className="footer_bottom">
        <p className="footer_copy">{copy}</p>
      </div>
    </>
  );
};

export default Footer;
