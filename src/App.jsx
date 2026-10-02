import Header from './components/Header'
import { posts } from './data/posts'
import PostCard from './components/PostCard'
import './App.css'

function App() {
  console.log(posts)

  return (
    <>
      <Header />
      <h1>記事一覧</h1>
      
      {posts.map((post) =>(<PostCard key={post.id} post={post} />))}
    </>
  )
}

export default App
