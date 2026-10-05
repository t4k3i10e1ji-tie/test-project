import { useParams } from 'react-router'
import { posts } from "../data/posts"

function PostDetail() {
  const { id } = useParams()
  const post = posts.find((post)=>
    post.id === Number(id)
  )
  const date = new Date(post.createdAt)
  const formattedDate = `${date.getFullYear()}年${date.getMonth() +1}月${date.getDate()}日`

  return (

    <div>
      <img src={ post.thumbnailUrl } alt={post.title} />
      <p>{ formattedDate }</p>
      <p>{post.categories.map((category)=>(<span key={category}>{category}</span>))}</p>
      <h1>{ post.title }</h1>

      <div dangerouslySetInnerHTML = {{ __html:post.content}}/>
    </div>
  )
}

export default PostDetail