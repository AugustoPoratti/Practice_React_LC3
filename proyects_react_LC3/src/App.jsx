
import './App.css'
import { useState } from "react";
import NewWork from './components/newTarea/NewTarea';
import List from './components/list/List';






function App() {

  const [works, setWorks] = useState([])


  return (
    <div>
      
      <NewWork works={works} setWorks={setWorks}/>
      <List works={works} setWorks={setWorks}/>
    </div>
  )
}

export default App
