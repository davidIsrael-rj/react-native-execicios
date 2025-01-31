import React from 'react';
import { Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos';

export default props => {
    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de produtos
            </Text>
            {produtos.map(p =>{
                return <Text style={Estilo.fontM} key={p.id}>{p.id} {p.nome} por R$ {p.preco}</Text>
            })}
        </>
    )
}
