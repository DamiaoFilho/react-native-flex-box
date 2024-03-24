import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { style } from './style'
import Button from "../button/button";

export default function NavBar(){
    return(
        <View style={style.body}>
            <Button label="Menu"></Button>
            <Button label="Logs"></Button>
            <Button label="Credits"></Button>
        </View>
    )
}