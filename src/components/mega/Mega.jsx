import React, { Component } from "react";
import { Text, TextInput } from "react-native";
import estilo from "../estilo";

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    constructor(props){
        super(props)
        this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    }
    alterarQtdeNumero(qtde) {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType="numeric"
                    style={{ 
                        borderBottomWidth: 1,
                        backgroundColor:"#000",
                        width:"100%",
                        color:"#fff" 
                    }}
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}