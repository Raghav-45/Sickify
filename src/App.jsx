import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiLibrary } from 'react-icons/bi'

function App() {

  const timeGreet = () => {
    const hour = Date.now().hour
    if (hour < 12) {
      return 'Morning'
    }
    if (hour < 17) {
      return 'Afternoon'
    }
    return 'Evening'
  }

  return (
    <div className='h-[100vh] bg-center bg-[url("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80")]'>
      <h1 className='text-3xl font-bold'>
        Good {timeGreet()}!
      </h1>
      <footer className='bg-gradient-to-t from-black backdrop-blur-lg text-white text-center fixed inset-x-0 bottom-0'>
        <div class="grid grid-cols-3 gap-0 m-5 text-xl">
          <div className='mx-auto'><AiFillHome/></div>
          <div className='mx-auto'><FiSearch/></div>
          <div className='mx-auto'><BiLibrary/></div>
        </div>
      </footer>
    </div>
  )
}

export default App
