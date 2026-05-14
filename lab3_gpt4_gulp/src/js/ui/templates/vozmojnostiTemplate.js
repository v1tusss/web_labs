export const vozmojnostiTemplate = (data) => {
  return `
    <div class="vozmojnosti_container">
      <div class="vozmojnosti_img">
        <img src="${data.img}" alt="vozmojnosti" />
      </div>

      <div class="vozmojnosti_text">
        <p class="mini_text">${data.topText}</p>

        <h2 class="vozmojnosti_title">${data.title}</h2>

        <p class="vozmojnosti_info">
          ${data.text}
        </p>

        <a href="#" class="orange_text">${data.link}</a>
      </div>
    </div>
  `;
};
