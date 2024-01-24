import React from 'react'
import {useSelector} from "react-redux"

export default function NotesList() {
    const notes = useSelector(state => state.notes)
   
    return (
    <div className='p-10 w-full'>
        <p className="texte-xl mb-6 text-slate-200">
            Bienvenue sur Notes101
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {notes.list?.length > 0 && notes.list.map(note => (
                <div key={note.id} className="bg-slate-100 hover:bg-slate-50 p-4 rounded cursor-pointer">
                    <p className="text-lg font-semibold">{note.title}</p>
                    <p className="text-gray-700">{note.subtitle}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
