import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

export default props => {
    return (
        <>
            <Text style={estilo.fontG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </>
    )
}