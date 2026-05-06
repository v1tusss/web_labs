import blogData from "../../mockData/blogData.js";
import blogTemplate from "../templates/blogTemplate.js";

const initBlog = (node) => {
  node.innerHTML = blogTemplate(blogData);
};

export default initBlog;