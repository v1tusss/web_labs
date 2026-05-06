const bigPostTemplate = (post) => {
  return `
    <div class="blog_big">
      <div class="blog_img">
        <img src="${post.img}" alt="blog" />
      </div>

      <div class="blog_text">
        <p class="blog_date">${post.date}</p>
        <h3 class="blog_card_title">${post.title}</h3>
        <a href="#" class="blog_link">${post.link}</a>
      </div>
    </div>
  `;
};

const smallPostTemplate = (post) => {
  return `
    <div class="blog_small">
      <div class="blog_small_img">
        <img src="${post.img}" alt="blog" />
      </div>

      <div class="blog_small_text">
        <p class="blog_date">${post.date}</p>
        <h3 class="blog_small_title">${post.title}</h3>
        <a href="#" class="blog_link">${post.link}</a>
      </div>
    </div>
  `;
};

const blogTemplate = (data) => {
  const smallPosts = data.smallPosts
    .map((post) => smallPostTemplate(post))
    .join("");

  return `
    <div class="blog_zagolovok">
      <h2 class="blog_big_title">${data.title}</h2>
    </div>

    <div class="blog_kartochki">
      <div class="blog_kartochki_box">
        ${bigPostTemplate(data.bigPost)}

        <div class="blog_smalls">
          ${smallPosts}
        </div>
      </div>
    </div>
  `;
};

export default blogTemplate;