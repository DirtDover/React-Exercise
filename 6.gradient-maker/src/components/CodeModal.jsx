import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import getGradientCSSValue from '../utils/getGradientCSSValue'

export default function CodeModal({closeModal}) {
    const gradientValues = useSelector(state => state.gradient)
  
  
    return (
    <div 
    onClick={closeModal}
    className='fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center'>
        <div className="max-w-[500px] rounded p-7 bg-gray-50">
            <div 
            onClick={e => e.stopPropagation()}
            className="flex items-center mb-5">
                <p className='font-semibold text-gray-950 mr-6'>Here is your code 🎉 </p>
                <button 
                
                className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
                    Copy
                </button>
                <button 
                onClick={closeModal}
                className="ml-auto mr-2 text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
                    Close
                </button>
            </div>
            <p className="rounded bg-gray-900 text-gray-200 font-semibold">
                {`background-image : ${getGradientCSSValue(gradientValues)}`}
            </p>
        </div>
    </div>
  )
}
