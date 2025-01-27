import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Primeiro from "./components/Primeiro";
import Comp, { Comp1, Comp2 } from "./components/Multi";

function App() {
    return <View style={style.App}>
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
    </View>
}

const style = StyleSheet.create({
    App: {
        backgroundColor:"#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default App