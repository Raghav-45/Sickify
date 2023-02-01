import React from 'react'
import { PlayerContext } from '../contexts/ContextApi'
import ReactPlayer from 'react-player/youtube'

export const YTPlayer = ((props) => {
  const { TrackData, MusicSourceURL, IsPlaying, setMusicDuration, setMusicCurrentTime } = PlayerContext()

  const opts = {
    height: '72',
    width: '128',
    playerVars: {
      autoplay: 1,
    },
  }

  const onYTReady = (e) => {
    e.target.pauseVideo();
  }

  return (
    // load the YouTube player
    <ReactPlayer url={`https://music.youtube.com/watch?v=${TrackData.YTid}`} height={'240px'} width={'100%'} playing={TrackData.IsPlaying} controls={false} onDuration={(e) => setMusicDuration(e)} muted={false} onProgress={(e) => setMusicCurrentTime(e.playedSeconds)} />
  )
})
YTPlayer.displayName = 'YTPlayer'