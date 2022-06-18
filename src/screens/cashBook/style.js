import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width:wp('100%'),
    },
    slideCover:{
        position:'absolute',
        top:hp('-5%'),
        zIndex:-5,
    },
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#00319D",
        marginBottom: 16,
        paddingBottom: 5
    },
    headerText: {
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    mainBody: {
        // paddingHorizontal: 20,
        // flex: 1,
        marginTop:-4,
    },
    view: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        alignSelf:'center',
    },
  
    subHeader: {
      
        //  borderTopRightRadius: 30,
        borderColor: "#3858CF",
        borderWidth: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // backgroundColor: '#0000',
        paddingVertical: 3,
        zIndex:90,
       
       
        // padding:1,
    },
    activeSubHeader: {
        backgroundColor: "#fff",
        borderRadius: 6,
        width: "45%",
        margin: 5,
        elevation:5,

    },
    inActiveSubHeader: {
        backgroundColor: "transparent",
        borderRadius: 6,
        width: "45%",
        margin: 5,
        borderWidth:0,
        borderColor:"#f5f5f5"
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        // color: "#5f9a32",
        color:'#212121',
        letterSpacing: 0.1,
        textAlign: "center",

    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color:'#212121',
        letterSpacing: 0.1,
        textAlign: "center",
        opacity: 0.8,
        // opacity: 0.6,
    },
    miniSubHeader: {
        // paddingHorizontal: 46,
        paddingVertical: 10,
    },
 
    inputMainHolder: {
        marginTop: Dimensions.get("window").height / 90,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.2,
    },
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 5,
        width: "70%"
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    textInput:{
       
        borderWidth:1,
        borderColor:'#9CA3AF',
        borderRadius:5,
        padding:10,
        marginTop:10,
        width:wp('90%'),
        alignSelf:'center',
        paddingLeft:25,
        marginBottom:10
      },
   
})