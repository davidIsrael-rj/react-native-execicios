import React from 'react';
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({ num = 0 }) => {
    return (
        <>
        <Text style={Estilo.fontG}>O Resultado é:</Text>
            <Text style={Estilo.fontG}>
                {num % 2 === 0 ? "Par" : "Impar"}
            </Text>
        </>
    )
}
