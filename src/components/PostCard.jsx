function PostCard({post}) {

  const date = new Date(post.createdAt)
  const formattedDate = `${date.getFullYear()}年${date.getMonth() +1}月${date.getDate()}日`

  return (

    <div className="flex items-start border-b border-gray-200 gap-4 py-4">

      <img className="w-50 h-30 object-cover shrink-0" src={ post.thumbnailUrl } alt={post.title} />
    
    <div className="flex flex-col gap-2">

      <div className="flex gap-2 items-center">
        <p className="text-[0.95rem] text-gray-600">{formattedDate}</p>
        <p className="flex gap-1.5">{post.categories.map((category)=>(<span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-[0.85rem]" key={category}>{category}</span>))}</p>
      </div>

        <h2 className="font-bold text-lg">{post.title}</h2>
        <div className="line-clamp-2 leading-[1.6] text-gray-700" dangerouslySetInnerHTML = {{ __html:post.content}}/>

    </div>

    </div>
  )
}

export default PostCard