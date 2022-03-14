import React, {useState} from 'react';
import './App.css';
import Escena from './components/Escena';
import {dataParts} from './data.js'
import Btn from './components/Btn';

function App() {
  const [start, setStart] = useState(false)

  function pressStart() {
    setStart(true)
  }

  const Saludo = <div className='saludo'>
      <h1>VOLS QUE T'EXPLIQUI UNA HISTÒRIA SÚPER INTERESSANT?</h1>
      <Btn handleClick={pressStart} direction={'COMENÇAR'}></Btn>
    </div>
  
  return (
    <div>
      {start ? <Escena part={dataParts}></Escena> : Saludo}
    </div>
  )
}

export default App;
