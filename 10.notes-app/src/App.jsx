import NotesList from "./components/NotesList"
import { useSelector, useDispatch } from "react-redux"
import { getNotesFromAPI } from "./features/notes"
import Sidebar from "./components/Sidebar"
import SideNotes from "./components/SideNotes"


function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  if(!notes.list) {
    dispatch(getNotesFromAPI())
  }
  
  
  
  return (
    <div className="flex bg-slate-800 min-h-screen">
      
      <Sidebar />
      <SideNotes />
      <NotesList />
    
    </div>
  )
    
  
}

export default App
