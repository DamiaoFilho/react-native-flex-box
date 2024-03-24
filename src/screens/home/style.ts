import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    main: {
        flex:1, 
        backgroundColor:"#643B9F",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        backgroundColor:"#C8A4D4",
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        margin: 20,
        borderRadius: 16,
    },
    section: {
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: "#AC94F4",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 20,
        borderRadius: 16,
        height: 164,
        alignContent: "center",
    },
    footer: {
        height: 54,
        width: "100%",
        backgroundColor: "#371F76",
        justifyContent: "center",
        alignSelf: "center",
    },
    footerText: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
    item: {
        borderRadius: 8,
        width: 50,
        height: "80%",
        backgroundColor: "black",
        margin: 25
    },
    item2: {
        borderRadius: 8,
        width: "90%",
        height: "25%",
        backgroundColor: "black",
        margin: 25
    },
    item3: {
        borderRadius: 8,
        width: 45,
        height: 45,
        backgroundColor: "black",
        margin: 5
    }
})