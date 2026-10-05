import { posts } from "../data/posts"
import PostCard from "../components/PostCard"

function Home() {

  return (
    <div className="max-w-[960px] mx-auto">

    <h1 className='text-[1.4rem] font-bold mb-4'>記事一覧</h1>
    {posts.map((post) =>(<PostCard key={post.id} post={post} />))}

    </div>
  )
}

export default Home