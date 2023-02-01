import React from 'react'
import { PlayerContext } from '../contexts/ContextApi'
import ReactPlayer from 'react-player/youtube'

export const YTPlayer = ((props) => {
  const { TrackData, MusicSourceURL, IsPlaying, setIsPlaying, setMusicDuration, setMusicCurrentTime } = PlayerContext()

  const opts = {
    height: '32px',
    width: '32px',
    playerVars: {
      autoplay: 1,
    },
  }

  const onYTReady = (e) => {
    e.target.pauseVideo();
  }

  return (
    // load the YouTube player
    <ReactPlayer style={{display: 'none'}} url={`https://music.youtube.com/watch?v=${TrackData.YTid}`} height={opts.height} width={opts.width} playing={IsPlaying} onStart={setIsPlaying(false)} controls={false} onDuration={(e) => setMusicDuration(e)} muted={false} onProgress={(e) => setMusicCurrentTime(e.playedSeconds)} />
  )
})
YTPlayer.displayName = 'YTPlayer'