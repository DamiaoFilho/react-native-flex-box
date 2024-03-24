import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { style } from './style'

export default function Button(props){
    return(
        <View style={ style.body }>
            <TouchableOpacity>
                <Text style={ style.text }>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}