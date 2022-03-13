import React from "react";
import {Btn} from './styled.js'

export default function Escena(props) {
    return(
        <Btn onClick={props.handleClick}>{props.direction}</Btn>
    )
}