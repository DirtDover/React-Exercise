import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { getMusicsData } from '../features/playlist'

export default function Playlist() {
    const dispatch = useDispatch()
    const playlist = useSelector(state => state.playlist)
    if(!playlist.songs) {
        dispatch(getMusicsData())
        
    }
    
    return <ul className="mt-4 pb-[30px]">
                {playlist?.songs?.length && playlist.songs.map(song => ( 
                  <li 
                  key={song.id}
                  className="p-2 border-2 font-semibold bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer">
                    <span>{song.title} - </span>
                    <span>{song.artist}</span>
                  </li>  
                ))}

           </ul>
}