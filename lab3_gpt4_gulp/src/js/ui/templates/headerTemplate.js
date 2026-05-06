const createLogoTemplate = ({ alt, src, href }) => {
  return `
    <div class="header__logo">
      <a href="${href}" class="logo__link">
        <img class="link__name" src="${src}" alt="${alt}" />
      </a>
    </div>
  `;
};

const createMenuItemTemplate = ({ title, href }, index) => {
  const activeClass = index === 0 ? " active" : "";

  return `
    <li class="menu__item${activeClass}">
      <a href="${href}" class="item__link">${title}</a>
    </li>
  `;
};

const createButtonTemplate = ({ title, href, isPrimary }) => {
  const btnClass = isPrimary
    ? "cta_buttons__singin btn primary-btn"
    : "cta_buttons__singin btn";

  return `
    <a href="${href}">
      <button class="${btnClass}">${title}</button>
    </a>
  `;
};

export const headerTemplate = ({ logoData, menuData, buttonsData }) => {
  const logo = createLogoTemplate(logoData);

  const menu = menuData
    .map((item, index) => createMenuItemTemplate(item, index))
    .join("");

  const buttons = buttonsData
    .map((item) => createButtonTemplate(item))
    .join("");

  return `
    ${logo}

    <aside class="header__menu">
      <ul class="menu">
        ${menu}
      </ul>
    </aside>

    <div class="cta_buttons">
      ${buttons}
    </div>
  `;
};