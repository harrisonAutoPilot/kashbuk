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
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom:20,
    width:wp('80%'),
    height:Platform.OS === "android" ? hp('50%') : hp('43%'),
    alignSelf:'center',
    
   
  },

  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
    alignSelf:'center',
 
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
justifyContent:'flex-end',
borderStyle:'solid',
alignItems:'center',
 width:wp('90%'),
 paddingLeft:20,
 paddingRight:40,
marginBottom:-10,
alignSelf:'center',
},
cancelBtn:{
paddingTop:20,
marginLeft:30,

},
confirmText:{
  fontFamily: "Urbanist",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#3858CF",
  fontWeight:'600',
},
cancelText:{
  fontFamily: "Urbanist",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#616161",
  fontWeight:'600',
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
  width: wp('60%'),
  alignItems: 'flex-start',
  paddingLeft: 10,
  paddingTop:0,
 
  
  // alignSelf:'center',
 
},
optionView: {
  flexDirection: "row",
  borderRadius: 6,
  borderWidth: 0,
  borderColor: "#f0f0f5",
  paddingTop:20,
  paddingBottom:5,
  padding:20,
  justifyContent:'space-between'
  

},
optionViewBetween1 :{
  padding:10,
  backgroundColor:'#A1E7DB',
  width:wp('70%'),
  alignSelf:'center',
  height:70,

},
optionViewBetween2 :{
  padding:10,
  // backgroundColor:'rgba(56, 88, 207, 0.16)',
  width:wp('70%'),
  alignSelf:'center',
  height:70,

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
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#0F8D8F",
  textTransform: "capitalize",
 
},
optionTextCover:{
   marginLeft:0,
  width:wp('60%'),

},
bikeImg:{
width:40,
height:40,
resizeMode:'contain'
},
optionText2: {
  fontFamily: "Urbanist-SemiBold",
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
  height: 40,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
  marginRight:20,
  marginTop:-6,
 
},
iconCircle2: {
  borderColor: "#BDBDBD",
  borderWidth: 0,
  width: 40,
  height: 40,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
  marginRight:20,
  marginTop:-6,
  
  
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
width:110,
height:110,
padding:30,
borderWidth:1,
borderColor:"#f5f6f7",
borderRadius:100,
alignSelf:'center',
alignItems:'center',
marginTop:-50,
position:'absolute',
backgroundColor:'#fff',
elevation:0.5,
},
logoImg:{
  width:50,
  height:50,
  resizeMode:'contain'
}  
});

export default styles