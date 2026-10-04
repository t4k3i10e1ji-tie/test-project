import Header from './components/Header'
import { posts } from './data/posts'
import PostCard from './components/PostCard'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <main className='max-w-[960px] mx-auto p-[24px_16px]'>
        <h1 className='text-[1.4rem] font-bold mb-4'>記事一覧</h1>
        {posts.map((post) =>(<PostCard key={post.id} post={post} />))}
      </main>

    </>
  )
}

export default App
