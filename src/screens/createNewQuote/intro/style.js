import {StyleSheet, Dimensions, Platform} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 20,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  mainContainer: {
    paddingBottom: 20,
    width: wp('100%'),
    // alignSelf:'center'
   
},
  body5: {
    backgroundColor: '#f5f5f5f',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom:20,
    width:wp('100%'),
    height:Platform.OS === "android" ? hp('70%') : hp('50%'),
    alignSelf:'center',
    bottom:hp("-30%") ,
  },

  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
    alignSelf:'center',
    zIndex:9000,
    position:'absolute'
  },

    titleText: {
    fontSize: 16,
    color: '#3858CF',
    marginTop: 10,
    fontFamily: "Urbanist-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 14,
    marginRight: 20,
    color: '#424242',
    marginTop: 10,
    fontFamily: "Urbanist-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  colorInfo: {
    width: wp('80%'),
    flexDirection: 'row',
    padding: 14,
    backgroundColor: 'rgba(56, 88, 207, 0.16)',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignSelf: 'center'
},
iconInfo: {
    marginRight: 10,
    marginTop: 5,
},
smTitleCover:{
  flexDirection:'row',
justifyContent:'center',
width:wp('80%'),
alignSelf:'center',
marginTop:50,
marginBottom:20,

},
controlCover:{
flexDirection:'row',
borderTopWidth:1,
borderColor:'#DCDCDC',
justifyContent:'space-around',
borderStyle:'solid',
alignItems:'center',
 width:wp('90%'),
marginBottom:-10,
marginTop:10,
alignSelf:'center',
paddingVertical:10,
},
cancelBtn:{
padding:10,
paddingHorizontal:50,
marginTop:5,
borderRadius:8,
marginLeft:30,
borderWidth:0,
borderColor:'#0F8D8F',
backgroundColor:'#0F8D8F',

},
checkCover:{
flexDirection:'row',
justifyContent:"center",

},
confirmText:{
  fontFamily:Platform.OS === "ios" ? "Arial" : "Roboto",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#fff",
  fontWeight:'600',
  textTransform:'capitalize',
},
cancelText:{
  fontFamily:Platform.OS === "ios" ? "Arial" : "Roboto",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#616161",
  fontWeight:'600',
},
cancelText1:{
  fontFamily: "Urbanist",
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#fff",
  fontWeight:'600',
  marginLeft:10,
  marginTop:5,
},
smTitle:{
  fontFamily: "Urbanist-SemiBold",
  fontSize: 14,
  lineHeight: 24,
  letterSpacing: 0.2,
  color: "#0F8D8F",
  fontWeight:'600',
  paddingBottom:15,
  paddingLeft:5,
  textTransform:'uppercase'
  
},
colorInfoText: {
    fontFamily: "Urbanist-SemiBold",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: "#00319D",
    width: 270,
    flexWrap: 'wrap',
    flex: 1,

},
activeCover: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: wp('90%'),
  alignItems: 'flex-start',
  paddingLeft: 10,
  paddingHorizontal:20,
  // paddingTop:20,
 
  
  // alignSelf:'center',
 
},
optionView: {
  flexDirection: "row",
  borderRadius: 6,
  borderWidth: 0,
  borderColor: "#f0f0f5",
  padding:10,
  alignSelf:'center',
  marginTop:2,
  // paddingBottom:10,
  justifyContent:'space-between'
  

},
optionViewBetween1 :{
  backgroundColor:'#A1E7DB',
  width:wp('80%'),
  alignSelf:'center',
  height:40,

},
optionViewBetween2 :{
  padding:0,
  // backgroundColor:'rgba(56, 88, 207, 0.16)',
  width:wp('80%'),
  alignSelf:'center',
  height:40,


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
  width: "70%",
  color: '#3858CF'
},
optionIconView2: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionText: {
  fontFamily: "Roboto",
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#0F8D8F",
  // textTransform: "capitalize",
 
},
optionTextCover:{
   marginLeft:0,
  width:wp('70%'),

},
bikeImg:{
width:20,
height:20,
resizeMode:'contain'
},
optionText2: {
  fontFamily:Platform.OS === "ios" ? "Arial" : "Roboto",
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#0F8D8F",
  // textTransform: "capitalize",
 
},
optionMiniTextView: {
  justifyContent: "center",
  paddingTop: 5,

},
itemCover:{
  // height:hp('40%'),
  marginTop:15,
},
iconCircle: {
  width: 40,
  height: 40,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
  marginTop:-10,
  // marginTop:-6,
 
},
iconCircle2: {
  width: 40,
  height: 40,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
   marginTop:-8,
  
  
},
icon: {
  alignSelf: "center"
},
//THIS IS FOR THE PLACEHOLDER LOADER
iconCircleP: {
  backgroundColor: "#BDBDBD",
  borderWidth: 0,
  width: 25,
  height: 25,
  borderRadius: 20,
  alignSelf: "center",
  justifyContent: "center",
},
optionTextP: {
width:80,
height:15,
backgroundColor:'#bfbfbf',
borderRadius:20,
marginTop:5,
marginBottom:5,
},
optionTextPL: {
  width:150,
  height:15,
  backgroundColor:'#bfbfbf',
  borderRadius:20,
  marginTop:5,
  marginBottom:5,
},
logoCover:{
width:150,
height:150,
padding:30,
alignItems:'center',
marginTop:10,
position:'absolute',
zIndex:90,
alignSelf:'center'
// backgroundColor:'#fff',

},
logoImg:{
  width:180,
  height:33,
  resizeMode:'contain'
},
backgroundImage: {
 width:500,
 height:400,
  resizeMode: 'cover', // or 'stretch'
  zIndex:20,
  marginLeft:-5,
} 
});

export default styles