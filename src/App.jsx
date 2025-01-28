import React from "react";
import { StyleSheet, View } from "react-native";
// import Primeiro from "./components/Primeiro";
// import Comp, { Comp1, Comp2 } from "./components/Multi";
import MinMax from "./components/MinMax";

function App() {
    return <View style={style.App}>
        <MinMax min="3" max="20"/>
        <MinMax min="50" max="249"/>
        {/* <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </View>
}

const style = StyleSheet.create({
    App: {
        backgroundColor:"#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

export default App