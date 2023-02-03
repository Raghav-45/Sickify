import React from 'react'
import Link from 'next/link'
import Playback from './Playback'

import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiLibrary } from 'react-icons/bi'
import { YTPlayer } from './YTPlayer'

export default function Layout({ children, title = 'Sickify' }) {
  return (
    <div className='h-full bg-center bg-dark'>

      {children}

      <div className='h-[350px]'></div>

      <footer className='bg-gradient-to-t from-dark backdrop-blur-lg text-white fixed inset-x-0 bottom-0'>
        <Playback/>
        <div className='grid grid-cols-3 gap-0 m-5 text-xl text-center'>
          <Link href='/home' className='mx-auto'><AiFillHome/></Link>
          <Link href='/search' className='mx-auto'><FiSearch/></Link>
          <Link href='/library' className='mx-auto'><BiLibrary/></Link>
        </div>
        {/* <YTPlayer/> */}
      </footer>
    </div>
  )
}