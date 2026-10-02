import Header from './components/Header'
import { posts } from './data/posts'
import './App.css'

function App() {
  console.log(posts)
  const date = new Date(posts[0].createdAt)
  const formattedDate = `${date.getFullYear()}年${date.getMonth() +1}月${date.getDate()}日`
  return (
    <>
      <Header />
      <h1>記事一覧</h1>
      <img src={ posts[0].thumbnailUrl } alt="記事タイトル1画像" />
      <p>{posts[0].title}</p>
      <p>{formattedDate}</p>
      <p>{posts[0].categories.map((category)=>(<span key={category}>{category}</span>))}</p>
      <div dangerouslySetInnerHTML={{ __html:posts[0].content}}/>
    </>
  )
}

export default App
