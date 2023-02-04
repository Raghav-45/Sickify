import * as React from 'react'

export const TrackList = ((props) => {
  const Image = props.Image
  const Name = props.Name
  const Artist = props.Artist

  return (
    <div className='px-2 pt-2'>
      <div onClick={props.onPlayButton} className='flex flex-row h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all'>
        <div className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg transition-all duration-100 delay-200'>
          <img src={Image} className='h-full w-full'/>
        </div>
        <div className='flex flex-1 flex-col ml-2 text-left align-middle transition-all duration-100 delay-200'>
          <h1 className='text-sm font-semibold text-white'>{Name}</h1>
          <h2 className='text-xs text-white'>Track • {Artist}</h2>
        </div>

        <div className='flex flex-none order-last flex-col mr-2 align-middle'>
          {/* { IsPlaying ? <FaPause/> : <FaPlay/> } */}
        </div>
      </div>
    </div>
  )
})

TrackList.displayName = 'TrackList'