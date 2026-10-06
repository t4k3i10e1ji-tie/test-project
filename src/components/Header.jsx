import { Link }from 'react-router'

function Header() {

  return (

    <header className='bg-[#333333] flex justify-between p-[16px_24px] text-white font-semibold'>
      <Link to="/">Blog</Link>
      <Link to="/contact">お問い合わせ</Link>
    </header>

  )
}

export default Header