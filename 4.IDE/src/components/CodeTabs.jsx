import React from 'react'

export default function CodeTabs({code, id}) {
  
  
  
  return (
    <textarea
    value={code} 
    spellcheck="false"
    className='bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none'
    >
    </textarea>
  )
}
