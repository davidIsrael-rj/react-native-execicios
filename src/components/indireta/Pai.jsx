import React, { useState } from 'react';
import Filho from './Filho';
import { Text } from 'react-native';
import estilo from '../estilo';


export default props => {

    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }
    return (
        <>
            <Text style={estilo.fontG}>
                {texto}{num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}
