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
      <PostCard post = {posts[0]} />
    </>
  )
}

export default App
