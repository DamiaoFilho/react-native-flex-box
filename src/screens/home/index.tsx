import { View, TextInput, TouchableOpacity, Text, StatusBar, Dimensions } from "react-native";
import NavBar from "../../components/navbar/navbar";
import { style } from "./style";

export default function Home(){
    const screenWidth = Dimensions.get('window').width
    const contentWidth = screenWidth - 2 * 20
    const sectionWidth = contentWidth - 40

    return(
        <View style={{flex: 1}}>
            <StatusBar/>
            <NavBar></NavBar>
            <View style={style.main}>
                <View style={[style.content, {width: contentWidth}]}>
                    <View style={[style.section, {width: sectionWidth}]}>
                        <View style={style.item}></View>
                        <View style={style.item}></View>
                        <View style={style.item}></View>
                    </View>
                    <View style={[style.section, {width: sectionWidth, flexDirection: "column", flexWrap: "nowrap"}]}>
                        <View style={style.item2}></View>
                        <View style={style.item2}></View>
                        <View style={style.item2}></View>
                    </View>
                    <View style={style.section}>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                        <View style={style.item3}></View>
                    </View>
                </View>
            </View>
            <View style={style.footer}>
                <Text style={style.footerText}>Exercício 3 - DDM</Text>
            </View>
        </View>
    )
}