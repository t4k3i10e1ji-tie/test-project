import { useParams } from 'react-router'
import { posts } from "../data/posts"

function PostDetail() {
  const { id } = useParams()
  const post = posts.find((post)=>
    post.id === Number(id)
  )
  return (
    <p>{ post.title }</p>
  )
}

export default PostDetail