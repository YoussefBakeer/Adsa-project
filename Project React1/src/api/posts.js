export async function getPosts() {
  const response = await fetch('/Api/posts.json')
  const data = await response.json()

  return data.posts
}

export async function getCategory()
{
  const res = await fetch('/Api/posts.json');
  const data = await res.json()

  const categories = data.posts.map((post) => post.category)

  return [...new Set(categories)]
}