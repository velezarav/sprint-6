import React from "react";
import {Part} from './styled.js'

export default function Escena(props) {
    return(
        <Part className={props.isSelected}>{props.part}</Part>
    )
}