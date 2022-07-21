import './App.css';
import { useState } from 'react';
import Fighter from './Components/Fighter';
import FighterScreen from './Components/FighterSceen';

function App() {

  const fighters = [
    {name: 'Roy', color: 'blue'},
    {name: 'Ganondorf', color: 'brown'},
    {name: 'Mario', color: 'lightskyblue'},
    {name: 'Luigi', color: 'pink'},
    {name: 'Marth', color: 'dodgerblue'},
    {name: 'Link', color: 'gray'},
    {name: 'Inkling', color: 'orange'},
    {name: 'Samus', color: 'gold'},
    {name: 'Fox', color: 'mediumseagreen'},
    {name: 'Sheik', color: 'coral'},
    {name: 'Zelda', color: 'midnightblue'},
    {name: 'Ken', color: 'firebrick'},
    // {name: 'Pikachu', color: 'yellow'}
  ]

  const [selectedFighter, setSelectedFighter] = useState()

  // Pass down useState to onClick in Fighter.js

  return (
    <div className="App">
      <h1> Fighters </h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return(
              <Fighter fighter={element} setSelectedFighter={setSelectedFighter}/>
            )
          })
        }
      </div>
      {
        selectedFighter ?  <FighterScreen selectedFighter={selectedFighter}/> : console.log('hi')
      }
    </div>
  );
}

export default App;