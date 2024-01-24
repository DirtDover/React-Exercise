import { nanoid } from 'nanoid'
import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addNoteFromUser } from '../features/notes'

export default function Edit() {
    const dispatch = useDispatch()
  const [inputsStates, setInputsStates] = useState({
    title: "",
    subtitle: "",
    bodyText: ""
  })

  const [showValidation, setShowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false
  })
  
  function handleSubmit(e) {
    e.preventDefault()

    if(Object.values(inputsStates).every(value => value)){
        setShowValidation({
            title: false,
            subtitle: false,
            bodyText: false
        })

        dispatch(addNoteFromUser({...inputsStates, id: nanoid(8)}))
        setInputsStates({
            title: "",
            subtitle: "",
            bodyText: ""
        })
    }
    else {
        for(const [key, value] of Object.entries(inputsStates)) {
            if(value.length === 0) {
                setShowValidation(state => ({...state, [key]: true }) )
            }
            else {
                setShowValidation(state => ({...state, [key]: false }) )
            }
        }
    }
  }
  
    return (
    <div className='w-full p-10'>
        <p className="text-slate-100 text-xl mb-4">Ajouter une note</p>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="title" className='mb-2 block text-slate-100'>Le titre</label>
            <input 
            spellCheck="false"
            onChange={e => setInputsStates({...inputsStates,
            title: e.target.value})}
            value={inputsStates.title}
            className='p-2 text-md block w-full rounded bg-slate-200'
            type="text"
            id='title' />
            {showValidation.title && (
            <p className="text-red-400 mb-2">Veuillez renseigner un titre</p>
        )}

<label htmlFor="subtitle" className='mb-2 mt-4 block text-slate-100'>Le sous-titre</label>
            <input 
            spellCheck="false"
            onChange={e => setInputsStates({...inputsStates,
            subtitle: e.target.value})}
            value={inputsStates.subtitle}
            className='p-2 text-md block w-full rounded bg-slate-200'
            type="text" 
            id='subtitle'/>
        {showValidation.subtitle && (
            <p className="text-red-400 mb-2">Veuillez renseigner un sous-titre</p>
        )}    
        
        <label htmlFor="bodyText" className='mb-2 mt-4 block text-slate-100'>Contenu de la note</label>
        <textarea
        spellCheck="false"
        onChange={e => 
            setInputsStates({...inputsStates, bodyText: e.target.value})}
        value={inputsStates.bodyText}
        id="bodytext"
        className='w-full min-h-[300px] p2 rounded bg-slate-200'
        ></textarea>
        {showValidation.bodyText && (
            <p className="text-red-400 mb-2">Veuillez écrire du contenu</p>
        )}

        <button
        className='mt-4 px-3 py-1 rounded bg-slate-100'
        //onClick={}
        >Enregistrer</button>
        </form>
    </div>
  )
}
