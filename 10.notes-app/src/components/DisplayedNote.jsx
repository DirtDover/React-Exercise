import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

export default function DisplayedNote() {
  const notes = useSelector(state => state.notes)
  const {id} = useParams()
  const actualNote = notes.list?.find(note => note.id === id)
  
  
  
  return (
    <div className='p-10'>
      <Link
      className='px-2 py-1 text-slate-800 bg-slate-300 rounded mr-2'
      to="/">
      Notes
      </Link>
      <Link
      className='px-2 py-1 text-slate-800 bg-green-600 rounded mr-2'
      to={`/editer/${id}`}>
      Mettre à jour
      </Link>
      <button
    // onClick={()=> {
     //                 dispatchEvent(deleteNote(id))
     //                 Navigate("/")      
     // }}
      className='px-2 py-1 text-slate-800 bg-red-600 rounded mr-2'>
      Supprimer
      </button>
      <p className="text-slate-100 text-4xl mb-2 mt-8">{actualNote.title}</p>
      <p className="text-slate-200 text-xl mb-4">{actualNote.subtitle}</p>
      <p className="text-slate-300">{actualNote.bodyText}</p>
    </div>
  )
}