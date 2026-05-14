import blogData from "../mockData/blogData";

export const BigPost = ({ post }) => {
  const { img, date, title, link } = post;

  return (
    <div className="blog_big">
      <div className="blog_img">
        <img src={img} alt="blog" />
      </div>

      <div className="blog_text">
        <p className="blog_date">{date}</p>
        <h3 className="blog_card_title">{title}</h3>
        <a href="#blog" className="blog_link">
          {link}
        </a>
      </div>
    </div>
  );
};

export const SmallPost = ({ post }) => {
  const { img, date, title, link } = post;

  return (
    <div className="blog_small">
      <div className="blog_small_img">
        <img src={img} alt="blog" />
      </div>

      <div className="blog_small_text">
        <p className="blog_date">{date}</p>
        <h3 className="blog_small_title">{title}</h3>
        <a href="#blog" className="blog_link">
          {link}
        </a>
      </div>
    </div>
  );
};

export const SmallPosts = ({ posts }) => {
  return posts.map((post, index) => <SmallPost key={index} post={post} />);
};

const Blog = () => {
  const { title, titleSecond, bigPost, smallPosts } = blogData;

  return (
    <>
      <div className="blog_zagolovok">
        <h2 className="blog_big_title">
          {title}
          <br />
          {titleSecond}
        </h2>
      </div>

      <div className="blog_kartochki">
        <div className="blog_kartochki_box">
          <BigPost post={bigPost} />

          <div className="blog_smalls">
            <SmallPosts posts={smallPosts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
