import React from 'react'
import {createPortal} from 'react-dom'
import { useState } from 'react'
import ModalContent from './ModalContent'

export default function ListCard({country}) {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <>
    <li 
    onClick={() => setShowModal(!showModal)}      /* au click d'une card, on inverse showmodal qui est au départ false, du coup il passe true, du coup la modal s'ouvre */
    className='relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform'>
        <h2 className='absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)] text-xl rounded'>{country.name.common}</h2>
        <img className='h-full w-full rounded object-cover' src={country.flags.svg} alt={country.name.common} />
    </li>
    {showModal && createPortal(<ModalContent country={country} closeModal={()=> setShowModal(!showModal)}/>, document.body)} 
    </>
  )   /* si showModal est true alors on lance la methode createPortal qui a deux paramètre (ce qu'elle crée et ou) on lui passe modalContent avec country, 
        le closemodal qui est une fonction qui va passer showmodal en false pourqu'au second click ca ferme et la modal s'ouvrira a la fin du body*/
}
