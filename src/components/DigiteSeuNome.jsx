import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Estilo from './estilo'

export default props => {

    const [nome, setNome] = useState('Teste')
    return (
        <View >
            <Text>{nome}</Text>
            <TextInput style={style.input}
                placeholder='Digite seu Nome'
                value ={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input:{
        color:"#000"
    }
})