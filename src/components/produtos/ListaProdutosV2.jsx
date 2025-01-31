import React from 'react';
import { FlatList, Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos';

export default props => {
    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de produtos V2
            </Text>
            <FlatList data={produtos}
            keyExtractor={i =>`${i.id}`}
                renderItem={({ item: p }) => {
                    return (
                        <Text style={Estilo.fontM}>
                            {p.id}) {p.nome} por R$ {p.preco}
                        </Text>
                    )
                }}
            />
        </>
    )
}
