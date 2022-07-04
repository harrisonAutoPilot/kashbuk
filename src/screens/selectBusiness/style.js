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
    paddingHorizontal:10,
    backgroundColor: '#fff',
    height:hp('70%'),
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
      top:Platform.OS === "android" ? hp('4%') : hp('7%'),
      borderWidth:0,
      borderColor:"#bfbfbf",
      borderRadius:10,
      marginTop:0,
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
  borderWidth:1,
  borderColor:"#9CA3AF",
  fontFamily: "Urbanist-SemiBold",
  width:wp('90%'),
  paddingLeft:20,
  borderRadius:6,
  paddingVertical:Platform.OS === "android" ? 8 : 20,
  marginBottom:20,

},
inputFieldStyleM:{
  borderWidth:1,
  borderColor:"#9CA3AF",
  fontFamily: "Urbanist-SemiBold",
  width:wp('90%'),
  height:80,
  paddingLeft:20,
  borderRadius:6,
  paddingVertical:Platform.OS === "android" ? 8 : 20,
  marginBottom:20,

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
btnCover:{
width:wp('100%'),
padding:10,
alignSelf:'center',
alignItems:'center',
marginTop: 10,

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
marginBottom:5,
marginTop:-5,
},
titleText:{
  color: "#0F8D8F",
  fontSize:20,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 33,
  letterSpacing: 0.2,
  fontWeight: "400"
},
titleCaption:{
  width:wp('80%'),
  padding:10,
  paddingLeft:40,
  marginBottom:20,
},
titleBgText:{
  color: "#0F8D8F",
  fontSize: 16,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 24,
  letterSpacing: 0.2,
  fontWeight: "700"
},
errView:{
marginTop:-20,
marginBottom:10,
paddingLeft:10,
},
createBtn1:{
  width:wp('82%'),
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth:1,
  borderColor:'#0F8D8F',
  alignSelf:'center',
  padding:10,
  borderRadius:6,
},
btnText:{
  color:'#0F8D8F',
  textAlign:'center',
  fontSize: 14,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 21,
  fontWeight:'500',
  letterSpacing: 0.3,
    
},
activeCover: {
  flexDirection: 'row',
  justifyContent: 'space-between',
   width: wp('85s%'),
   padding:5,
  
  // alignItems: 'flex-start',
  // paddingLeft: 10,
  // paddingTop:0,
 
  
  // alignSelf:'center',
 
},
optionView: {
  flexDirection: "row",
  borderRadius: 6,
  borderWidth: 0,
  borderColor: "#f0f0f5",
  // paddingTop:20,
  // paddingBottom:5,
   padding:20,
  justifyContent:'space-between'
  

},
optionViewBetween1 :{
  padding:5,
  borderWidth:1,
  borderColor:"#D1D5DB",
  width:wp('79%'),
  alignSelf:'center',
  marginBottom:10,


},
optionViewBetween2 :{
  padding:5,
  borderWidth:1,
  borderColor:"#D1D5DB",
  width:wp('79%'),
  alignSelf:'center',
  marginBottom:10,


},

optionIconView: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionIconView2: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionTextView: {
  marginLeft: 0,
  paddingTop: 5,
  width: "60%",
  color: '#3858CF'
},
optionIconView2: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionText: {
  fontFamily: "Urbanist-SemiBold",
  fontSize: 16,
  width:220,
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#0F8D8F",
  textTransform: "capitalize",
 
},
optionTextCover:{
   marginLeft:0,
  width:wp('40%'),

},
bikeImg:{
width:20,
height:20,
resizeMode:'contain'
},
optionText2: {
  fontFamily: "Urbanist-SemiBold",
  width:280,
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#616161",
  textTransform: "capitalize",
 
},
optionMiniTextView: {
  justifyContent: "center",
  paddingTop: 5,

},
itemCover:{
  // height:hp('40%'),
  marginTop:-10,
},
iconCircle: {
  borderColor: "#3858CF",
  borderWidth: 0,
  width: 40,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
  marginRight:20,
  
 
},
iconCircle2: {
  borderColor: "#BDBDBD",
  borderWidth: 0,
  width: 40,
 
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
  // marginRight:20,
},
checkBtn:{
  borderRadius:20
}
});

export default styles