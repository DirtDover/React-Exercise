import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

export default function Player() {
 const dispatch = useDispatch()
 const playlist = useSelector(state => state.playlist)
 const audioRef = useRef()

 
    return (
        <audio
        controls
        src={playlist.songs?.find(obj => obj.id === playlist.currentMusicID).url}
        ref={audioRef}
        ></audio>
  )
}
