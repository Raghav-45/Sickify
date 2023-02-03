import { PlayerContext } from '../contexts/ContextApi'
import { useState } from 'react'

import { FaPlay, FaPause } from "react-icons/fa"

import { BiShuffle } from "react-icons/bi"
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs"
import { FiRepeat } from "react-icons/fi"

const Playback = () => {
  const { TrackData, IsPlaying, setIsPlaying } = PlayerContext()
  const [ExpandPlayer, setExpandPlayer] = useState(false)

  return (
    <div className='px-2 pt-2'>
      <div onClick={(e) => {setExpandPlayer(!ExpandPlayer)}} className={`flex ${ExpandPlayer ? 'flex-col' : 'flex-row'} h-14 w-full p-2 bg-white/10 align-middle items-center overflow-hidden rounded-xl backdrop-blur-lg transition-all`}  style={{height: ExpandPlayer ? '18rem' : '3.5rem'}}>
        <div className='flex-none aspect-square h-full shadow-[0_4px_24px_rgb(0,0,0,50%)] overflow-hidden rounded-lg transition-all duration-100 delay-200' style={{height: ExpandPlayer ? '170px' : '100%'}}>
          <img src={TrackData.Poster} className='h-full w-full'/>
        </div>
        <div className={`flex flex-1 flex-col ${ExpandPlayer ? 'mt-2' : 'ml-2'} align-middle transition-all duration-100 delay-200`} style={{textAlign: ExpandPlayer ? 'center' : 'left'}}>
          <h1 className='text-sm font-semibold text-white'>{TrackData.TrackName}</h1>
          <h2 className='text-xs text-white'>{TrackData.ArtistName}</h2>
        </div>

        {!ExpandPlayer ? 
          <div className='flex flex-none order-last flex-col mr-2 align-middle' onClick={() => setIsPlaying(!IsPlaying)}>
            { IsPlaying ? <FaPause/> : <FaPlay/> }
          </div>

          :

          <div className='flex flex-col justify-center w-2/4 items-center'>
            <div className='flex items-center'>
              <button className='text-lg mx-3 text-lightest hover:text-white'><BiShuffle/></button>
              <button className='text-lightest mx-3 hover:text-white'><BsFillSkipStartFill className='text-2xl'/></button>
              <button onClick={() => setIsPlaying(!IsPlaying)}><div className='bg-green-500 hover:bg-green-400 rounded-full h-9 w-9 m-2 flex right-0 bottom-0 items-center justify-center transition opacity-100'>{ IsPlaying ? <FaPause className='text-white text-sm'/> : <FaPlay className='text-white text-sm'/> }</div></button>
              <button className='text-lightest mx-3 hover:text-white'><BsFillSkipEndFill className='text-2xl'/></button>
              <button className='text-lg mx-3 text-lightest hover:text-white'><FiRepeat/></button>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Playback