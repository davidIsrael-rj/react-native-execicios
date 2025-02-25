import React from 'react';
import { Text } from 'react-native'
import Estilo from '../estilo'
import produtos from './produtos';

export default props => {
    function obterLista(){
        return produtos.map(p=>{
            return <Text key={p.id} style={Estilo.fontM}>{p.id}) {p.nome} por R$ {p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={Estilo.fontG}>
                Lista de produtos
            </Text>
            {obterLista()}
        </>
    )
}
