import Gradient from "./components/Gradient"
import { useSelector } from "react-redux"
import ColorInputs from "./components/inputs/ColorInputs";
import AddRemoveColor from "./components/AddRemoveColor.jsx";
import RangeAngle from "./components/inputs/RangeAngle.jsx";
import SelectColor from "./components/inputs/SelectColor.jsx";
import RangeColorPosition from "./components/inputs/RangeColorPosition.jsx";
import OpenModalBtn from "./components/OpenModalBtn.jsx";


function App() {
  const gradientValues = useSelector(state => state.gradient)
  
  
  
  return <div className="relative text-slate-100 max-w-4xl mx-auto mt-20 p-4 border border-slate-400 flex">

    <div className="w-1/2 p-4 pr-8">
        <h1 className="text-center text-xl">Gradient Generator</h1>
        <p className="text-center mb-6">Bring style to your apps.</p>
    
    <p className="mb-1">Colors, min 2, max 5.</p>
    <div className="flex mb-2">
    {gradientValues.colors.map(obj => (
      <ColorInputs id={obj.id} color={obj.value} key={obj.id} />
    ))}
    </div>
      
    <div className="mb-5">
      <AddRemoveColor action={"remove"} text={"-"}/>
      <AddRemoveColor action={"add"} text={"+"}/>
    </div>
  
  <p className="">Pick end change a Color's position</p>
  <SelectColor />

  <p className="">Color's Position</p>
  <RangeColorPosition />

  <p className="">Gradient's global angle</p>
  <RangeAngle />

    <OpenModalBtn />
    </div>
    <Gradient />
  </div>
}

export default App
