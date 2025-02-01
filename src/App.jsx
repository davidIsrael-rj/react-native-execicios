import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Quadrado from "./components/layout/Quadrado";


// import DigiteSeuNome from "./components/DigiteSeuNome";
// import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
// import ListaProdutos from "./components/produtos/ListaProdutos";
// import UsuarioLogado from "./components/UsuarioLogado";
// import Familia from "./components/relacao/Familia";
// import Membro from "./components/relacao/Membro";
// import ParImpar from "./components/ParImpar";
// import Diferenciar from "./components/Diferenciar";
// import ContadorV2 from "./components/contador/ContadorV2";
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
    return <SafeAreaView style={style.App}>
        
        <Quadrado />
        <Quadrado cor="#900"/>
        <Quadrado cor="#090"/>
        <Quadrado cor="#009"/>
        {/* 
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome:'Joel', email: 'joel@joel.com'}}/>
        <Familia>
            <Membro nome="José" sobrenome="Belem"/>
            <Membro nome="Ana" sobrenome="Belem"/>
        </Familia>
        <Familia>
            <Membro nome="Manuel" sobrenome="Portugal"/>
            <Membro nome="Carlos" sobrenome="Portugal"/>
        </Familia>
        <ParImpar num={2}/>
        <Diferenciar/>
        <ContadorV2/>
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
    </SafeAreaView>
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