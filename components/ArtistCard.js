import * as React from 'react'
import { FaPlay } from "react-icons/fa"

export const ArtistCard = ((props) => {
  const Image = props.Image
  const Name = props.Name
  const Artist = props.Artist

  return (
    <div onClick={props.onPlayButton} className='relative flex-none group p-2 w-28'>
      <div className='bg-light w-full h-auto p-3 rounded-xl shadow-md'>
        <div className='relative aspect-square w-full shadow-[0_8px_24px_rgb(0,0,0,50%)] mb-3 overflow-hidden rounded-full'>
          <img src={Image} className='h-full w-full'/>
        </div>
        <h1 className='text-[0.65rem] leading-4 text-white font-semibold tracking-wide whitespace-nowrap overflow-x-hidden text-ellipsis text-center'>{Name}</h1>
      </div>
    </div>
  )
})

ArtistCard.displayName = 'ArtistCard'