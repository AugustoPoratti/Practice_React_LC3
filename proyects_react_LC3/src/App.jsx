
import './App.css'
import All_Beers from './components/All_Beers/All_Beers'
import beers from './components/Beers/Beers'
import Beers_Available from './components/Beers_Available/Beers_Available'
import Beers_Styles from './components/Beers_Styles/Beers_Styles'
import Red_Ipa from './components/Red_Ipa/Red_Ipa'




function App() {

  return (
    <div >
    <p>Carta Cervezas</p>
     <All_Beers beers={beers}/>
     <p>Cervezas disponibles</p>
     <Beers_Available beers={beers}/>
     <p>Cervezas Ipa y Red</p>
     <Red_Ipa beers={beers}/>
     <p>Estilos de cervezas</p>
     <Beers_Styles beers={beers}/>
    </div>
  )
}

export default App
