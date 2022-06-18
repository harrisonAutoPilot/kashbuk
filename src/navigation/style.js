import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({
    tabLable: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "800",
        paddingBottom: 8,

    },
    iconStyle: {
        paddingTop: 10,
        alignItems: "center"
    },
    badgeStyle: {
        backgroundColor: "#D32F2F",
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        letterSpacing: 0.2,
        fontWeight: "500",
    },
    tabLableTop:{
        // position: "absolute",
        // top: Platform.OS === "android" ? -5 : -4,
        // borderTopColor: "#5f9a32",
        borderTopWidth: 0,
        // backgroundColor:'#0F8D8F',
        width: 40,
        borderRadius:7,
       
        alignItems: "center"
    }

})