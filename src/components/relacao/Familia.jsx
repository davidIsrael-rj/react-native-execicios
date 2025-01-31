import React from 'react';
import Membro from './Membro';
import { Text } from 'react-native';
import estilo from '../estilo';

export default props => {
    return (
        <>
        <Text style={estilo.fontG}>Membros da Família:</Text>
            {props.children}
        </>
    )
}
