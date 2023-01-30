import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiLibrary } from 'react-icons/bi'
import { AvatarIcon } from './components/avatar'
import { MusicCard } from './components/MusicCard'

function App() {
  const greetByTime = () => {
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
    <div className='h-[100vh] bg-center bg-dark'>
      <div className='flex text-white h-auto w-full px-2 pt-2 pb-2 bg-gradient-to-b from-white/20 to-dark'>
        <div className='flex-1 text-2xl font-bold align-middle items-center'>
          <h1>
            Good {greetByTime()}!
          </h1>
        </div>
        <AvatarIcon/>
      </div>
      <MusicCard Name='Presenting Arijit Singh' Artist='Arijit Singh' Image='https://lh3.googleusercontent.com/X2LsGDinExErsug_2nybr0YUqOXPk0aVREvGlZOoMiRIsM4pR-WMqV_rOFIEDfVEMbXTwxjCSJuUNy8=w544-h544-l90-rj' />
      <footer className='bg-gradient-to-t from-dark backdrop-blur-lg text-white text-center fixed inset-x-0 bottom-0'>
        <div className='grid grid-cols-3 gap-0 m-5 text-xl'>
          <div className='mx-auto'><AiFillHome/></div>
          <div className='mx-auto'><FiSearch/></div>
          <div className='mx-auto'><BiLibrary/></div>
        </div>
      </footer>
    </div>
  )
}

export default App
