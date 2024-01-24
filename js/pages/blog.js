import { lightbox } from "../components/lightbox.js";
import { blogWithImage } from "../utils/blogImage.js";

export async function setupBlogPage(id) {
  let blog = await getBlog(id);
  blog = blogWithImage(blog);

  const div = document.createElement("div");

  const img = lightbox(blog.image, blog.title);

  const h1 = document.createElement("h1");
  h1.innerText = blog.title;
  div.append(h1, img);

  document.body.append(div);
}

export async function getBlog(id) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Something went wrong!")
}