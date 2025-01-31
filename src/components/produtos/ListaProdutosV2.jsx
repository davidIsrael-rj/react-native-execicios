import React from 'react';
import { FlatList, Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos';

export default props => {
    const produtoRender = ({item: p}) =>{
        return <Text style={Estilo.fontM}>{p.id}){p.nome} - {p.preco}</Text>
    }
    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de produtos V2
            </Text>
            <FlatList data={produtos}
            keyExtractor={i =>`${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}
