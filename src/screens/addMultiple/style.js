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
    padding:10,
    paddingLeft:20
  },
  topSmTitleText:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 16,
   color: "#000000",
   letterSpacing: 0.3,
   fontWeight:'500',
  },
  recordsContainer:{
    width:wp('100%'),
    height:hp('20%'),
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
  placeholder:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 20,
   color: "red",
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
    height:hp('80%'),
    backgroundColor:'rgba(15, 141, 143, 0.15)'
  },
  topCover:{
    flexDirection:'row',
    padding:10,
    width:wp('95%'),
    justifyContent:'space-between',
    alignSelf:'center',
    marginTop:10,

  },
  addText:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 21,
   color: "#000",
   letterSpacing: 0.3,
   fontWeight:'400',
   paddingLeft:10,
  },
  textInput1:{
    backgroundColor:'#fff',
    borderRadius:5,
    padding:10,
    width:wp('90%'),
    alignSelf:'center',
    paddingLeft:25,
    marginBottom:20
  },

  textInput:{
    backgroundColor:'#fff',
    borderRadius:5,
    borderColor:'rgba(209, 213, 219, 0.4)',
    fontFamily: "Urbanist-SemiBold",
    borderWidth:1,
    padding:10,
    width:wp('90%'),
    alignSelf:'center',
    paddingLeft:25,
    marginBottom:10
  },
  dateContainer:{
    flexDirection:'row',
    padding:10,
    width:wp('95%'),
    justifyContent:'space-between',
    alignSelf:'center',
    marginTop:-10
  },
  date1:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    fontFamily: "Urbanist-SemiBold",
    borderRadius:5,
    padding:10,
    width:wp('40%'),
    alignSelf:'center',
    height:40,
    alignItems:'center',
    marginBottom:0
  },
  pickedDate:{
    fontSize:11,
    color: 'black',
    fontFamily: "Urbanist-SemiBold",
  },
  increaseCartMainAmountView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft:Platform.OS === 'android' ? 14 : 32,
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
datePicker:{
  fontFamily: "Urbanist-SemiBold",
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
  //  paddingLeft:4,
  // paddingRight:-16,
  alignSelf:'center',
  textAlign:'center',
  marginRight:7, 
  marginLeft:7,
    
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
    lineHeight: 20,
    color: "#9CA3AF",
    letterSpacing: 0.3,
    fontWeight:'700'
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
  paddingVertical:20,
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
  marginBottom:15,
},
createBtn1:{
  width:wp('70%'),
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
    
}

});

export default styles