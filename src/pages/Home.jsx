import PostCard from "../components/PostCard";
import {useState, useEffect} from "react"

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data =await res.json()
      setPosts(data.posts)
    }
    fetcher()
  }, [])
  return (
    <div className="max-w-[960px] mx-auto p-[1.5rem_1rem]">
      <h1 className="text-[1.4rem] font-bold mb-4">記事一覧</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
