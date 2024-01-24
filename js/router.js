// Only run certain JS on certain pages

import { setupContactPage } from "./pages/contact.js";
import { setupBlogsPage } from "./pages/blogs.js";
import { setupBlogPage } from "./pages/blog.js";

// Home page > Blog post feed from API
// Blog post page > Blog post data from API
// Contact page > Form submission listener
// Favourites page > Render from localstorage

export async function router() {
  const url = new URL(location.href);
  const params = Object.fromEntries(url.searchParams.entries());

  switch (window.location.pathname) {
    case "/":
    case "/index.html":
      console.log("Home Page");
      break;
    case "/about/":
    case "/about":
    case "/about/index.html":
      console.log("About Page");
      break;
    case "/contact/":
    case "/contact":
    case "/contact/index.html":
      await setupContactPage()
      break;

    case "/blog/":
    case "/blog":
    case "/blog/index.html":
      await setupBlogPage(params.id)
      break;

    case "/blogs/":
    case "/blogs":
    case "/blogs/index.html":
      await setupBlogsPage()
      break;

    default:
      console.log("404 - not found")
  }
}
