import React, {useState} from 'react';
import './App.css';
import Escena from './components/Escena';
import Btn from './components/Btn';
import data from './data.json'

function App() {
  const [position, setPosition] = useState(0);
  const [comenzar, setComenzar] = useState(false)

  function pressComenzar() {
    setComenzar(true)
  }
  
  
  function goPrevious() {
    setPosition(prevPosition => prevPosition === 0 ? 3 : prevPosition - 1)
  }
  
  function goNext() {
    setPosition(prevPosition => prevPosition === 3 ? 0 : prevPosition + 1)
  }
  
  const dataParts = [...data]
  const parts = dataParts.map(part => <Escena key={part} part={part.txt} isSelected={dataParts.indexOf(part) === position ? 'is-red' : ''} />)
  console.log(parts)
  console.log(position)

  const App = <div className='App'>
      <Btn handleClick={goPrevious} direction={'ANTERIOR'}></Btn>
      <Btn handleClick={goNext} direction={'SIGUIENTE'}></Btn>
    {parts}
    </div>

  const Saludo = <div>
      <h1>¿Quiéres que te cuente una historia?</h1>
    <Btn handleClick={pressComenzar} direction={'COMENZAR'}></Btn>
    </div>
  
  return (
    <div>
      {comenzar ? App : Saludo}
    </div>
   
  )
}

export default App;
