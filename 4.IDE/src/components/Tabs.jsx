import React from 'react'
import CodeTabs from './CodeTabs'

export default function Tabs() {
  return (
    <div className='flex grow'>
        <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
            <button>HTML</button>
            <button>CSS</button>
            <button>JS</button>
        </div>
        <div className="w-full grow relative">
            <CodeTabs />
        </div>
    </div>
  )
}
