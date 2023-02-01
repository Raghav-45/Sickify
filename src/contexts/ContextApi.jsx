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

  const [SearchQuery, setSearchQuery] = useState('')
  const [SearchResults, setSearchResults] = useState({Tracks: [], Artists: [],})

  const [TrackData, setTrackData] = useState({TrackName: 'MusicName', ArtistName: 'ArtistName', Poster: 'TrackPoster', YTid: 'dQw4w9WgXcQ',})
  // const [PlayerData, setPlayerData] = useState({IsPlaying: false, TrackDuration: '00:00', TrackCurrentTime: '00:00'},)

  const SearchContent = async (q) => {
    const Result = {Tracks: [], Artists: [],}
    try {
      const resp = await fetch('https://ytmusicapi.raghavbhai4545.repl.co/search/songs?query=' + q)
      const data = await resp.json()
      Result.Tracks = data
      console.log(data)
    } catch (error) {console.log(error)}

    try {
      const resp = await fetch('https://api.themoviedb.org/3/search/tv?api_key=b24785488c1326b9c4442d7325d37724&language=en-US&page=1&query=' + q + '&include_adult=false')
      const data = await resp.json()
      Result.Artists = data.results
      console.log(data)
    } catch (error) {console.log(error)}

    setSearchResults(Result)
    console.log('Search Result: ', SearchResults)
  }

  useEffect(() => {
    let timerOut = setTimeout(() => {SearchContent(SearchQuery)}, 500)
    return () => clearTimeout(timerOut)
  }, [SearchQuery])

  const value = {
    MusicName, setMusicName,
    ArtistName, setArtistName,
    MusicSourceURL, setMusicSourceURL,
    IsPlaying, setIsPlaying,
    MusicDuration, setMusicDuration,
    MusicCurrentTime, setMusicCurrentTime,
    SearchQuery, setSearchQuery,
    TrackData, setTrackData,
    SearchResults,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}