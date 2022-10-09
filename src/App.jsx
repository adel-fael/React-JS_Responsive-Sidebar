import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen} setSelected={setSelected} selected={selected}/>
      <Home/>
    </div>
  )
}

export default App
