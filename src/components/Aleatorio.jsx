import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) =>{
    const min = Math.ceil(props.min)
    const max = Math.floor(props.max)
    const aleatorio = Math.floor(Math.random() * (max -min + 1)) + min
    
    return(
        <Text style={estilo.fontG}>Número Aleatório entre {props.min} e {props.max} é {aleatorio}</Text>
    )
}