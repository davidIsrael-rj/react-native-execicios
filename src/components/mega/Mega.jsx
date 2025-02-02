import React, { Component } from "react";
import { Text } from "react-native";
import estilo from "../estilo";

export default class Mega extends Component{

    render(){
        return(
            <>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
            </>
        )
    }
}