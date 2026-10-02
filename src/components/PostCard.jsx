function PostCard({post}) {

  const date = new Date(post.createdAt)
  const formattedDate = `${date.getFullYear()}年${date.getMonth() +1}月${date.getDate()}日`
  return (
    <div>

    <img src={ post.thumbnailUrl } alt="記事タイトル1画像" />
      <p>{post.title}</p>
      <p>{formattedDate}</p>
      <p>{post.categories.map((category)=>(<span key={category}>{category}</span>))}</p>
      <div dangerouslySetInnerHTML = {{ __html:post.content}}/>

    </div>
  )
}

export default PostCard