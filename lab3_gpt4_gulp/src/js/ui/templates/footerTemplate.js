export const footerColumnTemplate = (column) => {
  const links = column.links
    .map((item) => {
      return `<a href="#" class="footer_link">${item}</a>`;
    })
    .join("");

  return `
    <div class="footer_col">
      <h4 class="footer_name">${column.title}</h4>
      ${links}
    </div>
  `;
};

export const footerTemplate = (data) => {
  const address = data.address.join("<br />");

  const columns = data.columns
    .map((column) => footerColumnTemplate(column))
    .join("");

  return `
    <div class="footer_top">
      <h2 class="footer_big_title">${data.title}</h2>
      <a href="#" class="footer_btn">${data.button}</a>
    </div>

    <div class="footer_middle">
      <div class="footer_col footer_logo_col">
        <h3 class="footer_logo">${data.logo}</h3>

        <p class="footer_text">
          ${address}
        </p>

        <p class="footer_text">${data.rights}</p>
      </div>

      ${columns}
    </div>

    <div class="footer_bottom">
      <p class="footer_copy">${data.copy}</p>
    </div>
  `;
};
