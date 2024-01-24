import { blogWithImage } from "../utils/blogImage.js";

export async function setupBlogsPage() {
  const blogs = await getBlogs();
  renderBlogs(blogs);
}

export async function getBlogs() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (response.ok) {
    return await response.json()
  }

  throw new Error("API request failed!");
}

export function renderBlogs(blogList) {
  const ul = document.querySelector("ul.blogs");

  blogList.forEach(blog => {
    blog = blogWithImage(blog);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = blog.title;
    a.href = "/blog/?id=" + blog.id;
    li.append(a);
    ul.append(li)
  });
}