const favoriteBlog = (blogs) => {
  return blogs.reduce((favoriteBlog, currentBlog) => {
    if (favoriteBlog && favoriteBlog.likes >= currentBlog.likes) {
      return favoriteBlog
    } else {
      return currentBlog
    }
  }, undefined)
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

module.exports = {
  favoriteBlog,
  totalLikes
}
