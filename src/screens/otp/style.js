import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        //  flex: 1,
        height:hp('100%'),
        width:wp('100%'),
        backgroundColor: '#ffffff',
    },
    backCover:{
      flexDirection:'row',
      width:wp('50%'),
      marginTop:Platform.OS === 'android' ? 30 : 50,
      marginLeft:20,
      justifyContent:"space-between"
    },

  top:{
      width:wp('100%'),
      justifyContent:'center',
      paddingHorizontal:20,
      alignSelf:'center',
      alignSelf:'center',
      top:hp('4%'),
  },
  backImg:{
width:15,
height:15,
resizeMode:'contain',
  },
  backText:{
    fontSize: 15,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 30,
   color: "#000000",
   letterSpacing: 0.3,
   fontWeight:'500',
   marginTop:-8,
  },
  otpImg:{
    width:150,
    height:150,
    resizeMode:'contain'
  },
  smLogo:{
    width:150,
    height:40,
    resizeMode:'contain'
  },
  darkText:{
    fontSize: 15,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 30,
   color: "#000000",
   letterSpacing: 0.3,
   fontWeight:'400'
   
  },
  midImgCover:{
    width:wp('100%'),
    paddingBottom:20,
    paddingTop:50,
    alignItems:'center',
    alignSelf:'center',
    top:hp('5%'),

  },
  midTitleText:{
   width:wp('100%'),
   padding:10,
   fontSize: 15,
   fontFamily: "Urbanist-SemiBold",
   lineHeight: 22,
   fontWeight:'300',
   color: "#06353A",
   letterSpacing: 0.3,
  },
  inputCover: {
    width: wp('100%'),
    paddingHorizontal:40,
    backgroundColor: '#fff',
    alignSelf:'center',
},
  inputContainer:{
      width:wp('100%'),
      paddingTop:10,
  //  paddingHorizontal:40,
   alignSelf:'center',
      top:hp('4%'),   
  },
  forget:{
width:wp('90%'),
flexDirection:'row',
justifyContent:'flex-end',
alignSelf:'center',
padding:20,
  },
  forgetText:{
  color:'#1A87DD',
  fontSize: 14,
  fontFamily: "Urbanist-SemiBold",
   lineHeight: 17,
   fontWeight:'400',
  },
  labelView: {
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical:1,
    marginTop:10,
    zIndex: 2
},
label: {
    fontSize: 12,
  fontFamily: "Urbanist-SemiBold",
    lineHeight: 18,
    color: "#0F8D8F",
    fontWeight:'400',
    letterSpacing: 0.2,
},
pinInputView: {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  flexWrap: "wrap"
},
inputFieldStyle:{
  borderBottomWidth:1,
  borderColor:"#0F8D8F",
  width:wp('80%'),
  paddingVertical:Platform.OS === "android" ? 10 : 20,
 

},
showTextPin: {
  color: "#878787",
  fontSize: 14,
  marginTop: Platform.OS === "android" ? -32 : 5,
fontFamily: "Urbanist-SemiBold",
  lineHeight: 16,
  letterSpacing: 0.2,
  fontWeight: "400",
  position:'absolute',
  zIndex:8,
   left:wp('75%'),
},
showCheck: {
  color: "#fff",
  backgroundColor:'#0F8D8F',
  borderRadius:50,
  padding:4,
  fontSize: 10,
  marginTop: Platform.OS === "android" ? -32 : 5,
fontFamily: "Urbanist-SemiBold",
  lineHeight: 10,
  letterSpacing: 0.2,
  fontWeight: "400",
  position:'absolute',
  zIndex:8,
   left:wp('75%'),
},
errText:{
color: "red",
fontSize: 12,fontFamily: "Urbanist-SemiBold",
lineHeight: 16,
letterSpacing: 0.2,
fontWeight: "400"
},
failedResponseView: {
  marginTop: 10,
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 5,
  backgroundColor: "red"
},
btnCover:{
width:wp('100%'),
padding:10,
alignSelf:'center',
alignItems:'center',
marginTop: 100,

},
submit: {
  
  paddingVertical: 12,
  width:wp('85%'),
  backgroundColor: "#0F8D8F",
  borderRadius:8,
  zIndex: 2,
},
forGetCover:{
  width:wp('100%'),
  marginTop:20,
  flexDirection:'row',
  alignSelf:'center',
  justifyContent:'center'


},
greyText:{
color: "#06353A",
fontSize: 15,fontFamily: "Urbanist-SemiBold",
lineHeight: 18,
letterSpacing: 0.2,
fontWeight: "200"
},
colorText:{
  color: "#1A87DD",
  fontSize: 15,
fontFamily: "Urbanist-SemiBold",
  lineHeight: 16,
  letterSpacing: 0.2,
  fontWeight: "300"
},
scrollStyle: {
  height: "100%",
  top: hp('-0% '),
  paddingBottom: 250,

},
});

export default styles