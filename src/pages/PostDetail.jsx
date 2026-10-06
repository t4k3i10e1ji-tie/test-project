import { useParams, Link } from 'react-router'
import { posts } from "../data/posts"

function PostDetail() {
  const { id } = useParams()
  const post = posts.find((post)=>
    post.id === Number(id)
  )
  const date = new Date(post.createdAt)
  const formattedDate = `${date.getFullYear()}年${date.getMonth() +1}月${date.getDate()}日`

  return (

    <div className='max-w-[800px] mx-auto p-[24px_16px_48px] flex flex-col gap-[16px]'>

      <img className='w-full object-cover' src={ post.thumbnailUrl } alt={post.title} />

    <div className='flex gap-[8px] items-center'>

      <p className='text-gray-600 text-[#4b5563]'>{ formattedDate }</p>

      <p className='flex gap-[6px]'>{post.categories.map((category)=>(<span className="bg-gray-200 rounded-full text-gray-700 px-2 py-1 text-[0.8rem] text-[#374151]" key={category}>{category}</span>))}</p>
    </div>

      <h1 className='text-[1.8rem] text-gray-900 font-extrabold'>{ post.title }</h1>

      <div className='leading-[1.8] text-[#1f2937]' dangerouslySetInnerHTML = {{ __html:post.content}}/>

      <Link to="/" className=' text-[#2563eb] font-bold mt-4'>記事一覧へ戻る</Link>
    </div>
  )
}

export default PostDetail