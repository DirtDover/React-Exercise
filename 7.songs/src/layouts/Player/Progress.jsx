import React from 'react'

export default function Progress() {
  return (
    <div className='max-w-[800px] mx-auto'>
        <div className="bg-slate-900 h-2 rounded cursor-pointer">
            <div className="bg-indigo-400 scale-x-50 origin-left h-full pointer-events-none">

            </div>
        </div>
        <div className="flex justify-between">
            <span>2:15</span>
            <span>9:25</span>
        </div>
    </div>
  )
}
