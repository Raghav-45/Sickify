import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TrackList } from '../../components/TrackList'
import { PlayerContext } from '../../contexts/ContextApi'
import { ArtistCard } from '../../components/ArtistCard'
import { MusicCard } from '../../components/MusicCard'

export default function ArtistPage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const { setTrackData, setIsPlaying } = PlayerContext()

  const router = useRouter()
  const { ArtistID } = router.query

  // useEffect(() => {
  //   if (!router.isReady) return
  //   setLoading(true)
  //   fetch(`https://ytmusicapi.adi4545aditya.repl.co/getartist?query=${ArtistID}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [ArtistID])

  useEffect(() => {
    if (!router.isReady) return
    setLoading(true)
    fetch(`https://ytmusicapi.adi4545aditya.repl.co/getartistsongs?query=${ArtistID}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [ArtistID])

  if (isLoading) return <p className='text-white'>Loading...</p>
  if (!data) return <p className='text-white'>Loading...</p>

  return (<>
    <h1 className='text-white'>{data.name}</h1>

    {!data.albums?.length == 0 ? <>
    <div className='flex items-center justify-between'>
      <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider'>Albums</h1>
      {/* <h2 className='pr-4 pt-4 text-xs text-lightest uppercase tracking-wider mb-3'>See All</h2> */}
    </div>
      
    <div className="flex flex-row w-full overflow-x-scroll">
      {data.albums.map((elem) => (
        <MusicCard Name={elem.title} Artist={data.name} Image={elem.thumbnails[elem.thumbnails.length - 1].url} />
      ))}
    </div></> : <p className='text-white'>Search Something...</p>}

    <div className='flex items-center justify-between'>
      <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider'>Singles</h1>
    </div>

    <div>
    {!data.ss?.length == 0 && data.ss.map((elem) => (
      <TrackList Name={elem.title} Artist={data.name} Image={elem.thumbnails[elem.thumbnails.length - 1].url} onPlayButton={() => {setTrackData({TrackName: elem.title, ArtistName: data.name, Poster: elem.thumbnails[0].url, YTid: elem.videoId}); setIsPlaying(true);}} />
    ))}
    </div>

    <div className='flex items-center justify-between'>
      <h1 className='pl-2 text-2xl font-semibold text-white tracking-wider'>Songs</h1>
    </div>
    
    <div>
    {!data.songs?.tracks?.length == 0 && data.songs.tracks.map((elem) => (
      <TrackList Name={elem.title} Artist={elem.artists[0].name} Image={elem.thumbnails[elem.thumbnails.length - 1].url} onPlayButton={() => {setTrackData({TrackName: elem.title, ArtistName: elem.artists[0].name, Poster: elem.thumbnails[0].url, YTid: elem.videoId}); setIsPlaying(true);}} />
    ))}
    </div>
  </>)
}
