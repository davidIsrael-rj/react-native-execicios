import React from "react";
import { Text, View } from "react-native";
import Primeiro from "./components/Primeiro";
import Comp, { Comp1, Comp2 } from "./components/Multi";

function App() {
    return <View>
        <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
    </View>
}

export default App