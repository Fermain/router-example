export function blogWithImage(blogData) {

  blogData.image = `https://picsum.photos/id/${blogData.id}/200/300`;

  return blogData
}