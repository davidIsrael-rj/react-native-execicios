import React, { useState } from 'react';
import { Text } from 'react-native'
import Estilo from '../estilo'
import ContadorDisplay from './ContadorDisplay';

export default props => {
    const [num, setNum] = useState(0)

    return (
        <>
            <Text style={Estilo.fontG}>
                ContadorV2
            </Text>
            <ContadorDisplay num={num}/>
        </>
    )
}
