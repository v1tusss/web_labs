import blogData from "../mockData/blogData";

const BigPost = ({ post }) => {
  return (
    <div className="blog_big">
      <div className="blog_img">
        <img src={post.img} alt="blog" />
      </div>

      <div className="blog_text">
        <p className="blog_date">{post.date}</p>
        <h3 className="blog_card_title">{post.title}</h3>
        <a href="#blog" className="blog_link">
          {post.link}
        </a>
      </div>
    </div>
  );
};

const SmallPost = ({ post }) => {
  return (
    <div className="blog_small">
      <div className="blog_small_img">
        <img src={post.img} alt="blog" />
      </div>

      <div className="blog_small_text">
        <p className="blog_date">{post.date}</p>
        <h3 className="blog_small_title">{post.title}</h3>
        <a href="#blog" className="blog_link">
          {post.link}
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <div className="blog_zagolovok">
        <h2 className="blog_big_title">
          {blogData.title}
          <br />
          {blogData.titleSecond}
        </h2>
      </div>

      <div className="blog_kartochki">
        <div className="blog_kartochki_box">
          <BigPost post={blogData.bigPost} />

          <div className="blog_smalls">
            {blogData.smallPosts.map((post, index) => (
              <SmallPost key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;