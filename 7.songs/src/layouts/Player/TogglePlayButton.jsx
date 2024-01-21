import React from 'react'
import play from "../../assets/play-icon.svg"

export default function TogglePlayButton() {
  return (
    <button className='bg-slate-50 w-14 h-14 shadow-md rounded-full flex items-center justify-center'> 
        <img 
        className='w-20 h-20'
        src={play} alt="Button play" />
    </button>
  )
}
