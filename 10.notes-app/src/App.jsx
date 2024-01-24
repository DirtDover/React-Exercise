import NotesList from "./components/NotesList"
import { useSelector, useDispatch } from "react-redux"
import { getNotesFromAPI } from "./features/notes"
import Sidebar from "./components/Sidebar"
import SideNotes from "./components/SideNotes"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  if(!notes.list) {
    dispatch(getNotesFromAPI())
  }
  
  
  
  return (
    <div className="flex bg-slate-800 min-h-screen">
      <BrowserRouter>
        <Sidebar /> 
        <SideNotes />
        <Routes>
          <Route path="/" element={<NotesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
    
  
}

export default App
