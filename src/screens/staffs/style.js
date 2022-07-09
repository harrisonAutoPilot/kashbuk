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
        alignItems:'center',
        marginTop:Platform.OS === 'android' ? 20 : 0,
    },
  top:{
      flexDirection:'row',
      width:wp('100%'),
      justifyContent:'center',
      paddingHorizontal:30,
      alignSelf:'center',
      top:Platform.OS === 'android' ? hp('4%') : hp('8%'),
  },
  smLogo:{
    width:150,
    height:40,
    resizeMode:'contain'
  },
  darkText:{
    fontSize: 30,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 52,
   color: "#1A1A1A",
   letterSpacing: 0.3,
   fontWeight:'700'
   
  },
  midTitleCover:{
    width:wp('100%'),
    padding:30,
    top:hp('16%'),
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
checkView:{
position:'absolute',
zIndex:9,
marginTop:50,
right:wp('1%')
},
eyeCover:{
  position:'absolute',
  zIndex:9,
  marginTop:Platform.OS === 'android' ? 14 : 25,
  right:wp('1%')
},
  inputContainer:{
      width:wp('100%'),
      paddingTop:10,
  //  paddingHorizontal:40,
   alignSelf:'center',
      top:Platform.OS === "android" ? hp('4%') : hp('7%')  
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
    paddingHorizontal: 2,
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
  paddingVertical:Platform.OS === "android" ? 8 : 20,
 

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
fontSize: 12,
fontFamily: "Urbanist-SemiBold",
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
fontSize: 15,
fontFamily: "Urbanist-SemiBold",
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
   paddingBottom: 280,

},
titleCover:{
width:wp('100%'),
padding:30,
alignSelf:'center',
alignItems:'center',
textAlign:'center',
justifyContent:'center',
marginBottom:10,
marginTop:10,
},
titleText:{
  color: "#0F8D8F",
  fontSize:22,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 33,
  letterSpacing: 0.2,
  fontWeight: "600"
},
// this is where i start the styling
headerCover:{
  flexDirection:'row',
  justifyContent:'space-around',
  width:wp('90%'),
  alignSelf:'center',
  alignItems:'center'
},
memberCaption:{
color:'#9CA3AF',
fontSize:12,
fontFamily: "Urbanist-Regular",
lineHeight: 20,
letterSpacing: 0.2,
fontWeight: "400",
},
line:{
  backgroundColor:'#E5E7EB',
  height:2,
  width:120,
},
ownerCover:{
width:50,
height:50,
borderRadius:100,
borderWidth:1,
borderColor:'#f5f5f5',
alignItems:'center',
justifyContent:'center'
},
ownerImg:{
  width:50,
  height:50,
  borderRadius:100,
  resizeMode:'cover',
},
ownerContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:wp('90%'),
  borderBottomWidth:1,
  borderColor:'#E5E7EB',
  paddingHorizontal:10,
  paddingVertical:10,
  alignSelf:'center',
},
leftCover:{
  flexDirection:'row',

},
ownerDesCover:{
paddingLeft:10,
},
ownerPhoneText:{
  color: "#6B7280",
  fontSize:18,
  fontFamily: "Urbanist-Regular",
  lineHeight: 28,
  letterSpacing: 0.2,
  fontWeight: "400",
  
},
ownerNameText:{
  color: "#6B7280",
  fontSize:18,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 28,
  letterSpacing: 0.2,
  fontWeight: "400"
},
ownerRoleText:{
  color: "#3787FF",
  fontSize:16,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 24,
  letterSpacing: 0.2,
  fontWeight: "400"
},
middleCaption:{
  color: "#76ACFF",
  fontSize:13,
  fontFamily:Platform.OS === "ios" ? "Arial" : "Roboto",
  lineHeight: 16,
  letterSpacing: 0.2,
  fontWeight: "400" ,
  opacity:0.4
},
middleContainer:{
  marginTop:120,
  width:wp('100%'),
 paddingHorizontal:20,
  alignSelf:'center',
  alignItems:'center'
},
vectorImg:{
  width:90,
  height:90,
  resizeMode:'cover',
  borderRadius:100,
  marginTop:20,
},
createBtn:{
  width:wp('85%'),
paddingVertical:12,
  borderWidth:1,
  borderColor:'#0F8D8F',
  marginBottom:15,
  borderRadius:8,
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
},
btnText:{
  color: "#0F8D8F",
  fontSize:14,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 21,
  letterSpacing: 0.2,
  fontWeight: "500"
},
createBtn1:{
  width:wp('85%'),
  paddingVertical:13,
  borderWidth:0,
  backgroundColor:'#0F8D8F',
  marginBottom:10,
  borderRadius:8,
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
},
btnText1:{
  color: "#fff",
  fontSize:14,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 21,
  letterSpacing: 0.2,
  fontWeight: "500"
},
btnCover:{
  width:wp('100%'),
  padding:10,
  alignSelf:'center',
  alignItems:'center',
  marginTop: 120,
  
  },
});

export default styles