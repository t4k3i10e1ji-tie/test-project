import Header from './components/Header'
import { posts } from './data/posts'
import PostCard from './components/PostCard'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <main className='max-w-3xl mx-auto'>
        <h1 className='text-[1.4rem] font-bold my-6'>記事一覧</h1>
        {posts.map((post) =>(<PostCard key={post.id} post={post} />))}
      </main>

    </>
  )
}

export default App
