import React from 'react'

export default function ButtonTab({id, toggleTab, buttonContent, imgURL}) {
  return (
    <button 
    onClick={()=>toggleTab(id)}
    className='flex items-center px-5 py-5 hover:bg-slate-600 focus:bg-slate-600 outline-none'>
        <img src={imgURL} className='w-5'  />
        <span className='ml-3 text-slate-100 text-md'>{buttonContent}</span>
    </button>
  )
}
