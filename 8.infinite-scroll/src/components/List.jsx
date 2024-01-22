import React from 'react'
import { useState, useEffect, useRef } from 'react'
import spinner from "../assets/spinner.svg"
import usePhotos from '../hooks/usePhotos'

export default function List() {
  const [query, setQuery] = useState("random")
  const [pageNumber, setPageNumber] = useState(1)

  const photosApiData = usePhotos(query, pageNumber)
  
    return (
    <>
       
       <h1 className="text-4xl">Unsplash Clone.</h1>
       <form>
            <label className='block mb-4' htmlFor="search">
                Look for images...
            </label>
            <input 
            placeholder='Look for something...'
            className='block w-full mb-14 text-slate-800 py-3 px-2 text-md outline-gray-500 rounded border border-slate-400'
            type="text" />
       </form>
       <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] auto-rows-[175px] gap-4 justify-center">
        {!photosApiData.loader && photosApiData.photos.length !== 0 && photosApiData.photos.map((photo, index) => (
            <li key={photo.id}>
                <img 
                className='w-full h-full object-cover'
                src={photo.urls.regular} alt={photo.alt_description} />
            </li>
        ))}
       </ul>
    {/*Loader */}
    {(photosApiData.loading && !photosApiData.error.state) && <img className='block mx-auto' src={spinner}/>}
    </>
  )
}
