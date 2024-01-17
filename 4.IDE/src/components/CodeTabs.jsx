import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCode } from '../features/tabs'

export default function CodeTabs({code, id}) {
  const dispatch = useDispatch()
  
  
  return (
    <textarea
    onChange={e => dispatch(updateCode({id, value: e.target.value}))}
    value={code} 
    spellcheck="false"
    className='bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none'
    >
    </textarea>
  )
}
