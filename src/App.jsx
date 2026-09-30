import Header from './components/Header'
import { posts } from './data/posts'
import './App.css'

function App() {
  console.log(posts)
  return (
    <>
      <Header />
      <h1>記事一覧</h1>
      {posts[0].title}
    </>
  )
}

export default App
