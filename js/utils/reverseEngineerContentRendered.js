export function dataFromContentRendered(htmlContent) {
  const parser = new DOMParser();

  const html = parser.parseFromString(htmlContent, "text/html");

  const images = html.querySelectorAll("img");

  return images;
}

export async function getExamplePost() {
  const response = await fetch("http://march.local/wp-json/wp/v2/posts/1");
  const post = await response.json();
  return post;
}

export async function example() {
  const post = await getExamplePost();
  const data = dataFromContentRendered(post.content.rendered)
  console.log(data);
}