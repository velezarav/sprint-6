import React, {useState} from "react";
import {Part, Background} from './styled.js'
import Btn from './Btn';
import '../App.css'

export default function Escena(props) {
    const [position, setPosition] = useState(0);
    
    function goPrevious() {
        setPosition(prevPosition => prevPosition === 0 ? 3 : prevPosition - 1)
    }
    
    function goNext() {
        setPosition(prevPosition => prevPosition === 3 ? 0 : prevPosition + 1)
    }
    
    const parts = props.part.map(item => <Part key={item.txt} className={props.part.indexOf(item) === position ? 'is-red' : ''}>{item.txt}</Part>)

    return(
    <Background image={props.part[position].img} >
        <div className="botonera">
            <Btn handleClick={goPrevious} direction={'ANTERIOR'} />
            <Btn handleClick={goNext} direction={'SEGÜENT'} />
        </div>
        {parts}
    </Background>
    )
}