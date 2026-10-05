import Header from './components/Header'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header />

      <main className='max-w-[960px] mx-auto p-[24px_16px]'>
        <Home />
      </main>

    </>
  )
}

export default App
