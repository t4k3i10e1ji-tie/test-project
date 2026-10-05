import { Link }from 'react-router'

function Header() {

  return (

    <header className='bg-[#333333] flex justify-between text-white font-semibold'>
      <Link to="/" className='p-[16px_0_17px_24px]'>Blog</Link>
      <Link to="/contact" className='p-[16px_24px_17px_0]'>お問い合わせ</Link>
    </header>

  )
}

export default Header