import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) =>{

    const delta = props.max - props.min +1
    const aleatorio2 = parseInt(Math.random() * delta) + props.min
    return(
        <Text style={estilo.fontG}>Número Aleatório entre {props.min} e {props.max} é {aleatorio2}</Text>
    )
}