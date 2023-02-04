import React, { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext()

export const PlayerContext = () => useContext(Context)

export default function ContextProvider({ children }) {
  const [MusicName, setMusicName] = useState('random')
  const [MusicSourceURL, setMusicSourceURL] = useState('T-ztCxK4H00')
  const [ArtistName, setArtistName] = useState('random')

  const [IsPlaying, setIsPlaying] = useState(false)
  const [MusicDuration, setMusicDuration] = useState('00:00')
  const [MusicCurrentTime, setMusicCurrentTime] = useState('00:00')
  const [IsBuffering, setIsBuffering] = useState(true)

  const [SearchQuery, setSearchQuery] = useState('')
  const [SearchResults, setSearchResults] = useState({Tracks: [], Artists: [],})

  const [TrackData, setTrackData] = useState({TrackName: 'MusicName', ArtistName: 'ArtistName', Poster: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', YTid: 'dQw4w9WgXcQ',})
  // const [PlayerData, setPlayerData] = useState({IsPlaying: false, TrackDuration: '00:00', TrackCurrentTime: '00:00'},)

  const SearchContent = async (q) => {
    const Result = {Tracks: [], Artists: [],}
    try {
      const resp = await fetch('https://ytmusicapi.adi4545aditya.repl.co/search/songs?query=' + q)
      const data = await resp.json()
      Result.Tracks = data
      console.log(data)
    } catch (error) {console.log(error)}

    try {
      const resp = await fetch('https://ytmusicapi.adi4545aditya.repl.co/search/artists?query=' + q)
      const data = await resp.json()
      Result.Artists = data
      console.log(data)
    } catch (error) {console.log(error)}

    setSearchResults(Result)
    console.log('Search Result: ', SearchResults)
  }

  useEffect(() => {
    let timerOut = setTimeout(() => { !SearchQuery.length==0 ? SearchContent(SearchQuery) : console.log(SearchQuery) }, 500)
    return () => clearTimeout(timerOut)
  }, [SearchQuery])

  const value = {
    MusicName, setMusicName,
    ArtistName, setArtistName,
    MusicSourceURL, setMusicSourceURL,
    IsPlaying, setIsPlaying,
    MusicDuration, setMusicDuration,
    MusicCurrentTime, setMusicCurrentTime,
    IsBuffering, setIsBuffering,
    SearchQuery, setSearchQuery,
    TrackData, setTrackData,
    SearchResults,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}