
import './App.css'
import All_Beers from './components/All_Beers/All_Beers'
import beers from './components/Beers/Beers'





function App() {

  return (
    <div>
      <div>
        <All_Beers beers={beers}/>
     </div>
    </div>
  )
}

export default App
