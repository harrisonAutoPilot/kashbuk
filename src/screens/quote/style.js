import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        height:hp('100%'),
        //flex:1,
        width:wp('100%'),
        backgroundColor: '#ffffff',
        alignItems:'center',
        marginTop:Platform.OS === 'android' ? 20 : 0,
         //justifyContent:'space-between'
    },
  topSmTitle:{
    width:wp('100%'),
    flexDirection:'row',
    padding:10,
   alignSelf:'center',
   alignItems:'center',
   justifyContent:'center'
  },
  topSmTitleText:{
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
   lineHeight: 20,
   color: "#808080",
   letterSpacing: 0.3,
   fontWeight:'400',
  },
  topSmTitleTextL:{
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
   lineHeight: 20,
   color: "#808080",
   letterSpacing: 0.3,
   fontWeight:'400',
  },
  recordsContainer:{
    width:wp('100%'),
    height:hp('50%'),
    alignSelf:'center',
    marginTop:-10,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10,
  },
  listItem:{
    // backgroundColor:'#f3f4f5',
    borderRadius:5,
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'#f3f4f5',
    borderBottomWidth:1,

  },
  rightCover:{
    flexDirection:'row',
    

  },
  itemList:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 20,
   color: "#9CA3AF",
   letterSpacing: 0.3,
   fontWeight:'400',
  },
  itemAmount:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 20,
   color: "#6B7280",
   letterSpacing: 0.3,
   fontWeight:'400',
  },
  bottomCover:{
    width:wp('100%'),
    // height:hp('50%'),
    marginTop:0,
    // backgroundColor:'rgba(15, 141, 143, 0.15)',
    elevation:2,
    shadowColor:'#f5f6f7'
  },
  topCover:{
    flexDirection:'row',
    padding:10,
    width:wp('95%'),
    justifyContent:'space-between',
    alignSelf:'center',
    // marginTop:10,

  },
  addText:{
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 28,
   color: "#000",
   letterSpacing: 0.3,
   fontWeight:'400',
  },
  thumbOnStyle:{
backgroundColor:'#0F8D8F',

  },
  labelCover:{
    width:wp('90%'),
    alignSelf:'center',
padding:3,
  },
  thumbOffStyle:{
    backgroundColor:'gray',
    
      },
  trackOnStyle:{
    borderColor:'#0F8D8F',
    borderWidth:1, 
  },
  trackOffStyle:{
    borderColor:'gray',
    borderWidth:1, 
  },
  textInput:{
    backgroundColor:'#fff',
    fontFamily: "Urbanist-SemiBold",
    borderRadius:5,
    borderColor:'rgba(209, 213, 219, 0.4)',
    borderWidth:1,
    padding:10,
    paddingVertical:Platform.OS === 'android' ? 12 : 14,
    width:wp('90%'),
    alignSelf:'center',
    paddingLeft:25,
    marginBottom:10
  },
  textInputSm:{
    backgroundColor:'#fff',
    borderRadius:5,
    fontFamily: "Urbanist-SemiBold",
    borderWidth:1,
    borderColor:'#D1D5DB',
    padding:5,
    paddingVertical:Platform.OS === 'android' ? 10 : 14,
    width:wp('42%'),
    alignSelf:'center',
    paddingLeft:25,
    marginBottom:10,
    marginTop:-2,
  },
  textInput1:{
    backgroundColor:'#fff',
    fontFamily: "Urbanist-SemiBold",
    borderRadius:5,
    borderColor:'rgba(209, 213, 219, 0.4)',
    borderWidth:1,
    padding:10,
    width:wp('90%'),
    alignSelf:'center',
    paddingLeft:25,
    marginBottom:10,
    marginTop:-7,
  },
  dateContainer:{
    flexDirection:'row',
    padding:10,
    paddingTop:2,
    paddingBottom:-12,
    width:wp('95%'),
    justifyContent:'space-between',
    alignSelf:'center',
  },
  date1:{
    flexDirection:'row',
    fontFamily: "Urbanist-SemiBold",
    justifyContent:'space-between',
    backgroundColor:'#fff',
    borderRadius:5,
    padding:10,
    width:wp('40%'),
    borderWidth:1,
    borderColor:'#D1D5DB',
    alignSelf:'center',
    height:40,
    alignItems:'center',
    marginBottom:20
  },
  quantityCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    borderRadius:5,
    padding:12,
    paddingHorizontal:20,
    paddingVertical:12,
    width:wp('90%'),
    borderWidth:1,
    borderColor:'#D1D5DB',
    alignSelf:'center',
     height:52,
    alignItems:'center',
    marginBottom:10,
   
  },
  pickedDate:{
    fontSize:11,
    color: 'black',
    fontFamily: "Urbanist-SemiBold",
  },
  increaseCartMainAmountView: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    marginLeft:14,
    paddingVertical:20,
},
cartAmountView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:0,
    //marginRight:Platform.OS === 'android' ? 35 : 5,
    // borderWidth: 1,
    borderColor: "#EEEEEE",
    shadowColor: '#EEEEEE',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 50
},
decreaseIconCartView: {
    flexDirection: "row",
    // marginTop: 54,
    alignItems: "center"
},
amountText: {
    fontSize: 22,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 30,
    color: "#469D00",
    letterSpacing: 0.3,
    textAlign: "center",
    marginRight:Platform.OS === 'ios' ? 10 : 5,
},
increase: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth:1,
    borderColor: "#9CA3AF",
    borderRadius: 100,
  
    // borderBottomLeftRadius: 40
},
decrease: {
  paddingHorizontal: 4,
  paddingVertical:4,
  borderWidth:1,
 borderColor: "#9CA3AF",
  borderRadius: 100,

},
increaseText: {
    // paddingVertical: 11,
     paddingLeft:4,
    // paddingRight:-16,
    alignSelf:'center',
    textAlign:'center',
    marginRight:-5,   
},
label2:{
  fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    // lineHeight: 21,
    color: "#0F8D8F",
    letterSpacing: 0.3,
    fontWeight:'700',
    paddingRight:Platform.OS === 'ios' ? 10 : 0,
},
label3:{
  fontSize: 10,
    fontFamily: "Urbanist-SemiBold",
    // lineHeight: 20,
    color: "#9CA3AF",
    letterSpacing: 0.3,
    fontWeight:'400'
},
labelText:{
  fontSize: 12,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 20,
  color: "#111827",
  letterSpacing: 0.3,
  fontWeight:'400'
},
optionTextView: {
  marginLeft: 16,
  // width: "85%",
},
optionTextView2: {
  marginLeft: 16,
  // width: "85%",

},
optionText: {
  fontFamily: "Urbanist-SemiBold",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.3,
  fontWeight: "400",
  color: "#4B5563",
  textTransform: "capitalize"
},
optionMiniTextView: {
  justifyContent: "center",
  paddingTop: 4,

},
optionViewCover:{
  flexDirection:'row',
  justifyContent:'space-around',
  alignSelf:'center',
},
optionViewCover2:{
  flexDirection:'row',
  justifyContent:'space-around',
  alignSelf:'center', 
},
optionView: {
  flexDirection: "row",
  // borderRadius: 4,
  borderWidth: 0,
  borderColor: "#f2f3f4",
  // width:wp('90%'),
  alignItems:'center',
  paddingHorizontal:10,

},
iconCircle: {
  backgroundColor: "#0F8D8F",
  flexDirection:'row',
  borderWidth: 0,
  width: 20,
  height: 20,
  borderRadius: 5,
  alignSelf: "center",
  justifyContent: "space-around",
},
iconCircleDrop: {
  borderColor: "rgba(70, 157, 0, 1)",
  borderWidth: 0,
  width: 20,
  height: 20,
  borderRadius: 5,
  alignSelf: "center",
  justifyContent: "space-around",
  marginTop: 20,
},
iconCircle2: {
  borderColor: "#D1D5DB",
  flexDirection:'row',
  borderWidth: 2,
  width: 20,
  height: 20,
  borderRadius: 5,
  alignSelf: "center",
  justifyContent: "space-around",
},
icon: {
  alignSelf: "center"
},
selectContainer:{
  paddingHorizontal:10,
},
btnCover:{
  paddingVertical:10,
},
createBtn:{
  width:wp('88%'),
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderWidth:1,
  borderColor:'#0F8D8F',
  alignSelf:'center',
  padding:10,
  borderRadius:6,
},
createBtn1:{
  width:wp('85%'),
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth:1,
  borderColor:'#0F8D8F',
  alignSelf:'center',
  padding:10,
  borderRadius:6,
  marginTop:10,
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
raiseCover:{
  flexDirection:'row',
  padding:20,
  
},
raiseText:{
  color:'rgba(26, 135, 221, 0.7)',
  textAlign:'center',
  fontSize: 14,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 21,
  fontWeight:'500',
  letterSpacing: 0.3,
},
uploadBtn:{
  width:wp('80%'),
  backgroundColor:'#fff',
  elevation:Platform.OS === "android" ? 1 : 2,
  shadowColor:'#000',
  borderRadius:6,
  padding:20,
  alignItems:'center',
  alignSelf:'center',
  marginBottom:20,
  marginTop:10,
  borderWidth:1,
  borderColor:'#f4f5f6',

},
uploadCaption:{
  color:'#4B4EFC',
  textAlign:'center',
  fontSize: 16,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 24,
  fontWeight:'400',
  letterSpacing: 0.3,
},
uploadCaptionGray:{
  color:'#6B7280',
  textAlign:'center',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'400',
  letterSpacing: 0.3,
},
// THIS IS WHERE I START
addressCover:{
  width:wp('100%'),
  padding:10,
  paddingTop:2,
  flexDirection:'row',
  justifyContent:'space-between',

},
addressContainer:{
  width:wp('40%'),
  padding:1,
  borderWidth:0,
  borderColor:'#f4f5f6',
  
},
toText:{
  color:'#374151',
  fontSize: 16,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 27,
  fontWeight:'400',
  letterSpacing: 0.3,
},
clientNameText:{
  color:'#000000',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 18,
  fontWeight:'500',
  letterSpacing: 0.3,
},
address:{
  color:'#374151',
  fontSize: 12,
  fontFamily: "Urbanist-Regular",
  lineHeight: 18,
  fontWeight:'200',
  letterSpacing: 0.3,
  textTransform:'capitalize',
},
descriptionCover:{
  flexDirection:"row",
  width:wp('100%'),
  justifyContent:'space-between',
  borderWidth:1,
  borderColor:"#DFE4EA"

},
decriptionContainerL:{
  width:wp('40%'),
padding:5,
borderRightWidth:1,
borderColor:"#DFE4EA",
paddingLeft:10,
},
decriptionContainerR:{
  width:wp('62%'),
padding:5,
borderRightWidth:1,
borderColor:"#DFE4EA",
flexDirection:'row',
justifyContent:'space-evenly'

},
descripTitle:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 22,
  fontWeight:'700',
  letterSpacing: 0.3,
  textTransform:'uppercase'
},
listContainer:{
  width:wp('100%'),
  flexDirection:'row',
  justifyContent:'space-between',
  padding:5,
  paddingTop:1,
},
listContainerReceipt:{
  width:wp('100%'),
// height:hp('40%'),
alignSelf:'center',
alignItems:'center',
padding:5,
paddingTop:1,
},
leftList:{
  width:wp('39%'),
  borderRightWidth:1,
  borderBottomWidth:1,
  borderColor:'#DFE4EA',
  marginTop:-4,
},
rightList:{
  flexDirection:'row',
  width:wp('62%'),
  justifyContent:'space-around',
  borderBottomWidth:1,
  borderColor:'#DFE4EA',
  marginTop:-10,
  padding:5

},
descTopText:{
  color:'#374151',
  fontSize: 12,
  fontFamily: "Urbanist-SemiBold",
  lineHeight: 20,
  fontWeight:'600',
  letterSpacing: 0.3,
  textTransform:'capitalize',
  paddingLeft:10
},
descBottomText:{
  color:'#374151',
  fontSize: 11,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'300',
  letterSpacing: 0.3,
  textTransform:'capitalize'
},
rightValues:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'300',
  letterSpacing: 0.3,
},
rightValues1:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'300',
  letterSpacing: 0.3,
  width:90,
  // backgroundColor:"red",
  textAlign:'center',

},
rightValues2:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'300',
  letterSpacing: 0.3,
  width:90,
  textAlign:'center', 
  paddingRight:10,

},
rightValues3:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'300',
  letterSpacing: 0.3,
  width:90,
  textAlign:'center',

},
totalCover:{
  width:wp('100%'),
  padding:1,
  backgroundColor:"#f4f5f6",
  // flexDirection:'row',
  alignItems:'flex-end',
  alignSelf:'center',
  paddingRight:10,
  marginTop:-2,
},
totalTop:{
  flexDirection:'row'
},
totalBottom:{
  flexDirection:'row',

},
totalTitle:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'300',
  letterSpacing: 0.3,
},
totalTitle1:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Medium",
  lineHeight: 20,
  fontWeight:'500',
  letterSpacing: 0.3,
},
totalValue:{
  color:'#374151',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 24,
  fontWeight:'300',
  letterSpacing: 0.3,
  marginLeft:30,
  marginRight:8,
},
downTotal:{
  flexDirection:'row',
  alignItems:'flex-end',
  width:wp('100%'),
  justifyContent:'flex-end',
  padding:8,
  paddingRight:10,
},
totalCap:{
  padding:8,
},
totalCapText:{
  color:'#374151',
  fontSize: 16,
  fontFamily: "Urbanist-Regular",
  lineHeight: 22,
  fontWeight:'700',
  textTransform:'uppercase',
 
},
colorTotal:{
  padding:8,
  backgroundColor:'#baf7f8',
  borderRadius:14,
  width:65,
  alignItems:'center',
  paddingTop:6,
  paddingBottom:6,
  marginLeft:20
},
colorCapText:{
  color:'#0F8D8F',
  fontSize: 14,
  fontFamily: "Urbanist-Regular",
  lineHeight: 20,
  fontWeight:'700',
  textTransform:'uppercase',
 
},
paymentCaptionCover:{
  width:wp('100%'),
  padding:10,
},
paymentCaption:{
  color:'#0F8D8F',
  fontSize: 18,
  fontFamily: "Urbanist-Regular",
  lineHeight: 22,
  fontWeight:'700',
  textTransform:'uppercase',
},
scrollStyleZ: {
  // height: "100%",
  // top: hp('-0% '),
  paddingBottom: 50,
  alignSelf:"center",
  

},

});

export default styles