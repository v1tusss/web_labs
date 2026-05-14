export const registraciyaTemplate = (data) => {
  return `
    <div class="registraciya_box">
      <div class="registraciya_text">
        <p class="registraciya_mini">${data.smallText}</p>
        <h3 class="registraciya_title">${data.title}</h3>
      </div>

      <div class="registraciya_btn_box">
        <button class="registraciya_btn">${data.button}</button>
      </div>
    </div>
  `;
};
