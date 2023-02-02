import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { PlayerContext } from '../contexts/ContextApi'

const Playback = () => {
  const { TrackData, IsPlaying, setIsPlaying } = PlayerContext()
  return (
    <div className='px-2 pt-2'>
      <div className='flex h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg'>
        <div className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg'>
          <img src={TrackData.Poster} className='h-full w-full'/>
        </div>
        <div className='flex flex-1 flex-col ml-2 align-middle'>
          <h1 className='text-sm font-semibold text-white'>{TrackData.TrackName}</h1>
          <h2 className='text-xs text-white'>{TrackData.ArtistName}</h2>
        </div>
        <div className='flex flex-none order-last flex-col mr-2 align-middle' onClick={() => setIsPlaying(!IsPlaying)}>
          {IsPlaying ? <FaPause/> : <FaPlay/>}
        </div>
      </div>
    </div>
  )
}

export default Playback
