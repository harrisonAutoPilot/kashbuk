import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    mainBody: {
        paddingTop: 10,
        // backgroundColor: "#00319D",
    },
    headerTitle: {
        color: "#ffffff",
        textAlign: "center",
        fontFamily: "Urbanist-SemiBold",
        fontSize: 18,
        lineHeight: 24,
        fontWeight:'600'
    },
    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "ios" ? 10 : 15,
        borderTopWidth: 0,
        // borderTopColor: "rgba(0,0,0,0.1)"
    },
    profileImg:{
        width:40,
        height:40,
        borderRadius:100,
    },
    logoImg:{
        width:130,
        height:40,
        resizeMode:'contain',
        alignSelf:'center'
     
    },
    headerSubIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingBottom: 16,
        marginTop:-10,
    },
    headerSubIconMenuView: {
        paddingLeft: 16
    },
    headerSubLastIconView: {
        paddingLeft: 20
    },
    navCover: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        paddingHorizontal: 10,
        marginTop: 10,
        justifyContent: "space-between",
        width: "90%"
    },
    titleCover: {
        width: wp('75%'),
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: 20
        // justifyContent: "space-between"
    },
    titleCover1: {
        width: wp('100%'),
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: 20,
        marginTop:20,
        // justifyContent: "space-between"
    },
    logoCover:{
        width: wp('75%'),
        alignSelf: "center",
        height:40,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        fontWeight: Platform.OS === "ios" ? "600" : "600",
        letterSpacing: 0.1,
        textAlign: "center",
        textTransform: "capitalize"
    },
    btnText1: {
        color: '#000',
        fontSize: 20,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 30,
        fontWeight: Platform.OS === "ios" ? "600" : "600",
        letterSpacing: 0.1,
        textAlign: "center",
        textTransform: "capitalize"
    },
    badge: {
        backgroundColor: "#D32F2F",
        borderRadius: 10,
        position: "absolute",
        top: -6,
        left: 33,
        width: 14,
        height: 14,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    badgeN: {
        backgroundColor: "#43A047",
        borderRadius: 10,
        position: "absolute",
        top: -5,
        left: 12,
        width: 14,
        height: 14,
        justifyContent: "center",
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 12,
        letterSpacing: 0.1,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"

    },
    navCoverWhite: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderBottomWidth: 0,
        borderBottomColor: '#f5f5f5',

    },
    btnTextWhite: {
        color: '#212121',
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
        textAlign: "center"
      },
      btnTextWhiteTwo: {
        color: '#011A51',
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 33,
        letterSpacing: 0.1,
        textAlign: "center",
        fontWeight:'800'
      },
      textCover:{
        width:300,
    
    alignItems:"center",
  
       
      }

});

export default styles