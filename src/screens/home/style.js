import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
          //flex: 1,
        height:hp('100%'),
        //  width:wp('100%'),
        backgroundColor: '#ffffff',
        alignItems:'center',
         justifyContent:'space-between'
    },
    topCover:{
      width:wp('100%'),
      backgroundColor:'#0F8D8F',
      height:hp('22%'),
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      position:'absolute',
      top:hp('-1%'), 
  },
  flatListCover:{
    height:Platform.OS === "android" ? hp('55%') : hp('64%'),
  },
  floatingBtn:{
    width:50,
    height:50,
    borderRadius:100,
    backgroundColor:"#0F8D8F",
    position:'absolute',
    top:hp('75%'),
    alignItems:'center',
    justifyContent:'center',
    right:30,
    shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
shadowRadius: 2,
elevation: 2,    
  },
  plusSign:{
fontSize:40,
color:'#000',
fontWeight:'300',
marginTop:-5,
  },
  crossSign:{
    fontSize:30,
    color:'#fff',
    fontWeight:'300',
    marginTop:-5,
      },
  dashboardCover:{
width:wp('92%'),
height:130,
elevation:5,
backgroundColor:'#fff',
borderRadius:10,
position:'absolute',
top:Platform.OS === 'android' ? hp('12%') : hp('15%'),
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
shadowRadius: 2,
elevation: 2,
alignItems:'center',
justifyContent:'center'
  },
  dashboardBottomCover:{
    width:wp('91%'),
    borderTopWidth:1,
    borderColor:'#E5E7EB',
    padding:10,
    paddingTop:15,
    paddingBottom:15,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',

  },
  dashboardTopCover:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:wp('91%'),
    padding:20,
    paddingTop:0,
    paddingBottom:0,
    alignItems:'center',
    alignSelf:'center',

  },
  leftTopDashboard:{
    width:wp('41%'),
    height:60,
    borderRightWidth:1,
    borderColor:'#E5E7EB',
    // backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
  rightTopDashboard:{
    width:wp('45%'),
    height:60,
    // backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
  arrowStyle:{
paddingTop:10,
  },
  totalCaptionRed:{
    fontSize: 12,
    fontFamily: "Helvetica",
   lineHeight: 14,
   color: "rgba(204, 51, 61, 0.7)",
   letterSpacing: 0.3,
   fontWeight:'400',
   paddingBottom:5,
  },
  totalCaption:{
    fontSize: 12,
    fontFamily: "Helvetica",
   lineHeight: 14,
   color: "rgba(50, 129, 48, 0.7)",
   letterSpacing: 0.3,
   fontWeight:'400',
   paddingBottom:5,
  },
  totalValueRed:{
  color:'rgba(204, 51, 61, 0.7)',
  fontSize: 12,
    fontFamily: "Helvetica",
   lineHeight: 14,
   letterSpacing: 0.3,
   fontWeight:'400',
  },
  totalValue:{
    color:'rgba(50, 129, 48, 0.7)',
    fontSize: 12,
      fontFamily: "Helvetica",
     lineHeight: 14,
     letterSpacing: 0.3,
     fontWeight:'400',
    },
  valuesCover:{
    padding:10,
  },
  rightInner:{
    flexDirection:'row'
  },
  leftInner:{
    flexDirection:'row'
  },
  colorArrowImg:{
    width:5,
    height:50,
  },
  titleCaption:{
    fontSize: 14,
    fontFamily: "Helvetica",
   lineHeight: 17,
   color: "#212121",
   letterSpacing: 0.3,
   fontWeight:'400',
   paddingBottom:8,
  },
  balanceText:{
    fontSize: 12,
    fontFamily: "Helvetica",
   lineHeight: 14,
   color: "#000000",
   letterSpacing: 0.3,
   fontWeight:'400'
  },

  darkText:{
    fontSize: 30,
    fontFamily: "Helvetica",
   lineHeight: 52,
   color: "#1A1A1A",
   letterSpacing: 0.3,
   fontWeight:'700'
   
  },
  listContainer:{
    width:wp('100%'),
  position:'absolute',
  top:hp('29%'),
    padding:20,
 
  },
  containerHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:5,
    paddingBottom:10,
  },
  lastCaption:{
    fontSize: 16,
    fontFamily: "Arial",
   lineHeight: 24,
   color: "#1A1A1A",
   letterSpacing: 0.3,
   fontWeight:'500'
  },
  viewAllText:{
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
   lineHeight: 24,
   color: "rgba(52, 145, 219, 0.7)",
   letterSpacing: 0.3,
   fontWeight:'500'
  },
  listCover:{
    width:wp('92%'),
    padding:10,
    borderRadius:10,
    // backgroundColor:'#f5f6f7',
    alignSelf:'center',
  },
  itemBottomCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,

  },
  itemLeftCover:{
justifyContent:'flex-end',
  },
  itemRightCover:{
   justifyContent:'flex-end',
   alignItems:'flex-end',
      },
  itemTitleText:{
   fontSize: 12,
   fontFamily: "Urbanist-SemiBold",
   lineHeight: 20,
   color: "#4B5563",
   letterSpacing: 0.3,
   fontWeight:'400'
  },
  itemDate:{
    fontSize: 10,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 18,
    color: "rgba(26, 26, 26, 0.7)",
    letterSpacing: 0.3,
    fontWeight:'400',
    opacity: 0.4,
  },
  itemAmount:{
    fontSize: 15,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 22,
    color: "rgba(50, 129, 48, 0.7)",
    letterSpacing: 0.3,
    fontWeight:'400',
  },
  receiptCover:{
    padding:2,
    paddingLeft:6,
    paddingRight:6,
    backgroundColor:'rgba(220, 230, 247, 0.4)',
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:6,
    marginTop:10,
   textAlign:'center',
   alignItems:'center',

  },
  receiptText:{
    fontSize: 10,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#789EE0",
    letterSpacing: 0.3,
    fontWeight:'300',
    paddingRight:5,
  },
  modeText:{
    fontSize: 10,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#789EE0",
    letterSpacing: 0.3,
    fontWeight:'300',
    textTransform:'capitalize'
  },
  modeCover:{
    padding:2,
    paddingLeft:6,
    paddingRight:6,
    backgroundColor:'rgba(220, 230, 247, 0.4)',
    borderRadius:5,
    maxWidth:50,
    justifyContent:'flex-end',

  },
  flowCover:{
    position:"absolute",
    top:hp('50%'),
    right:wp('-22%'),
  },
  smBtnOne:{
    width:200,
    height:46,
    borderRadius:30,
    backgroundColor:'#0F8D8F',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
  },
  smBtnTwo:{
    width:200,
    height:46,
    borderRadius:30,
    backgroundColor:'#0F8D8F',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:20,
    marginBottom:10,
  },
  smBtnThree:{
    width:200,
    height:46,
    borderRadius:30,
    backgroundColor:'#0F8D8F',
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:40,
    marginBottom:10,
  },
  smBtnInner:{
    height:46,
    width:46,
    borderRadius:100,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center',
   
  },
  innerTextCover:{
    width:150,
    height:46,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center'
  },
  innerText:{
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 21,
    color: "#fff",
    letterSpacing: 0.3,
    fontWeight:'400',
    marginRight:20,
  },
  smLogo:{
    width:22,
    height:22,
    resizeMode:'contain'
  }


});

export default styles