import React from "react";
import { StyleSheet, View } from "react-native";
import ContadorV2 from "./components/contador/ContadorV2";


// import Pai from "./components/indireta/Pai";
// import Pai from "./components/direta/Pai";
// import Contador from "./components/Contador";
// import Titulo from "./components/Titulo";
// import Botao from "./components/Botao";
// import Primeiro from "./components/Primeiro";
// import Comp, { Comp1, Comp2 } from "./components/Multi";
// import MinMax from "./components/MinMax";
// import Aleatorio from "./components/Aleatorio";

function App() {
    return <View style={style.App}>
        <ContadorV2/>
        {/* 
        <Pai/>
        <Pai/>
        <Contador inicial={100} passo={13}/>
        <Contador/>
        <Botao></Botao>
        <Titulo principal="Cadastro Produto" segundario="Tela Cadastro do Produto"/>
        <Aleatorio min={1} max={10}/>
        <MinMax min="3" max="20"/>
        <MinMax min="50" max="249"/>
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </View>
}

const style = StyleSheet.create({
    App: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

export default App