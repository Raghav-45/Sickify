import * as React from 'react'
import { FaPlay } from "react-icons/fa"

export const MusicCard = ((props) => {
  const Image = props.Image
  const Name = props.Name
  const Artist = props.Artist

  return (
    <div className="relative flex-none group p-2 w-48">
      <div className="bg-light w-full h-auto p-4 rounded-xl shadow-md">
        <div className='relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden rounded-lg'>
          <div className='absolute playButton bg-green-500 rounded-full h-10 w-10 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-0 group-hover:opacity-100 translate-y-7 group-hover:-translate-y-0'>
            <button onClick={props.onPlayButton}><FaPlay className='text-white text-1xl'/></button>
          </div>
          <img src={Image} className='h-full w-full'/>
        </div>
        <h1 className='text-sm text-white font-semibold tracking wide whitespace-nowrap overflow-x-hidden text-ellipsis'>{Name}</h1>
        <h2 className='text-xs text-lightest tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis pb-0'>{Artist}</h2>
      </div>
    </div>
  )
})

MusicCard.displayName = 'MusicCard'