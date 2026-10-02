import Header from './components/Header'
import { posts } from './data/posts'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <h1>記事一覧</h1>
      <img src={ posts[0].thumbnailUrl } alt="記事タイトル1画像" />
      <p>{posts[0].title}</p>
      <p>{posts[0].createdAt}</p>
      <p>{posts[0].categories.map((category)=>(<span key={category}>{category}</span>))}</p>
      <p>{posts[0].content}</p>
    </>
  )
}

export default App
