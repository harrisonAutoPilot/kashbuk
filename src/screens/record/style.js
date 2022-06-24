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
        fontFamily: "Urbanist-SemiBold",
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
        marginTop:Platform.OS === 'android' ? 2 : 7,
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
        fontFamily: "Urbanist-SemiBold",
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
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    textInput:{
       
        borderWidth:1,
        borderColor:'#9CA3AF',
        borderRadius:5,
        padding:10,
        fontFamily: "Urbanist-SemiBold",
        marginTop:10,
        width:wp('90%'),
        alignSelf:'center',
        paddingLeft:45,
        marginBottom:10
      },
      titleCover:{
        width:wp('90%'),
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'center',
      },
      titleCover1:{
        width:wp('98%'),
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
        paddingLeft:22,
        
      },
      left:{
        width:wp('45%'),
        borderBottomWidth:1,
        padding:5,
        borderRightWidth:0,
        borderColor:'#E5E7EB',
      },
      right:{
        width:wp('45%'),
        borderBottomWidth:1,
        padding:5,
        borderRightWidth:0,
        borderColor:'#E5E7EB',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:10,
      },
      lefT:{
        width:wp('45%'),
        borderBottomWidth:0,
        padding:5,
        borderRightWidth:0,
        borderColor:'#E5E7EB',
      },
      righT:{
        width:wp('45%'),
        borderBottomWidth:0,
        flexDirection:'row',
        padding:5,
        borderRightWidth:0,
        borderColor:'#E5E7EB',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:10,
      },
      listLeft:{
        flexDirection:'row',
        justifyContent:'space-around'

      },
      listdate:{
        flexDirection:'row',
        justifyContent:'space-around',
        maxWidth:100,

      },
      availabilityCover:{
       paddingTop:15,
      },
      smTitleText:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#6B7280",
        letterSpacing: 0.3,
        fontWeight: "500",
      },
      smTitleText1:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#6B7280",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign:'center'
      },
      smTitleText2:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#6B7280",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign:'left'
      },
      smTitleText3:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#6B7280",
        letterSpacing: 0.3,
        fontWeight: "600",
        marginLeft:-20,
        textAlign:'left'
      },
      smTitleTextColor:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#09A5A8",
        letterSpacing: 0.3,
        fontWeight: "700",
      },
      
      searchImg:{
        width:25,
        height:25,
        position:'absolute',
        marginTop: Platform.OS === 'android' ? 22 : 18,
        marginLeft:30,
        opacity:0.6,
      },
      calendarImg:{
        width:18,
        height:18,
        position:'absolute',
        marginTop: Platform.OS === 'android' ? 50 : 45,
        marginLeft:Platform.OS === 'android' ? 305 : 330,
        opacity:0.6,
      },
      listCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:wp('90%'),
        alignSelf:'center',
        paddingVertical:5,
        borderBottomWidth:1,
        borderColor:"#E5E7EB"
      },
      reportListCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:wp('90%'),
        alignSelf:'center',
        paddingVertical:15,
        paddingHorizontal:5,
        borderBottomWidth:1,
        borderColor:"#E5E7EB"
      },
      nameText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#4B5563",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      nameTextIN:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#30BFC1",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      nameTextOUT:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#D34F46",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      nameTextBALANCE:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#789EE0",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      productText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#4B5563",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      purposeText:{
        fontSize: 10,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 18,
        color: "rgba(26, 26, 26, 0.7)",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      outCover:{
        padding:4,
        borderRadius:8,
        textAlign:'center',
        backgroundColor:'#FAE6E6',
        width:80,
        alignItems:'center',
        marginTop:5
      },
      lowCover:{
        padding:4,
        borderRadius:8,
        textAlign:'center',
        backgroundColor:'#E0F0F0',
        width:80,
        alignItems:'center',
        marginTop:5
      },
      outText:{
        fontSize: 10,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 12,
        color: "#D34F46",
        letterSpacing: 0.3,
        fontWeight: "500",
      },
      lowText:{
        fontSize: 10,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 12,
        color: "#09A5A8",
        letterSpacing: 0.3,
        fontWeight: "500",
      },
      countCover:{
        paddingRight:15,
        paddingTop:15,
      },
      countText:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#4B5563",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      priceText:{
        fontSize: 15,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 22,
        color: "rgba(50, 129, 48, 0.7)",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      priceTextC:{
        fontSize: 15,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 22,
        color: "#DF8288",
        letterSpacing: 0.3,
        fontWeight: "400",
      },
      listContainer:{
        height:hp('63%'),
        paddingLeft:0
      },
      totalTitle:{
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#6B7280",
        letterSpacing: 0.3,
        fontWeight: "700",
      },
      viewAllCover:{
        marginLeft:15
      },
      viewAllText:{
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#6B7280",
        letterSpacing: 0.3,
        fontWeight: "500", 
      },
      totalCountCover:{
        padding:2,
        paddingLeft:8,
        paddingRight:8,
        backgroundColor:'rgba(15, 141, 143, 0.13)',
        borderRadius:8,
      },
      totalCountText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#4B5563",
        letterSpacing: 0.3,
        fontWeight: "700", 
      },
      addBtn:{
        width:wp('90%'),
        padding:10,
        alignSelf:'center',
        backgroundColor:'#0F8D8F',
        borderRadius:6,
        margin:5,
      },
      productImg:{
        width:40,
        height:40,
        resizeMode:'contain',
      },
      bagCover:{
        borderRadius:100,
        padding:5,
        borderWidth:1,
        borderColor:'#f4f5f6',
        alignItems:'center',
        marginRight:10,
      },



  // THIS IS FOR THE SELECT DATE (REPORT STYLES)
  dateTitle:{
  paddingLeft:20,
  marginBottom:-5,
  marginTop:5,
  },
  dateSelectText:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "#4B5563",
    letterSpacing: 0.3,
    fontWeight: "700", 
  },
  miniDashboard:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingHorizontal:10,
  },
  blueCover:{
    padding:10,
    backgroundColor:'#E0F0F0',
    alignItems:'center',
    minWidth:80,
    borderRadius:8,
  },
  redCover:{
    padding:10,
    backgroundColor:'#FAE6E6',
    alignItems:'center',
    minWidth:80,
    borderRadius:8,
  },
  grayCover:{
    padding:10,
    backgroundColor:'#F3F4F6',
    alignItems:'center',
    minWidth:90,
    borderRadius:8,
  },
  blueText:{
    fontSize: 12,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 15,
    color: "#30BFC1",
    letterSpacing: 0.3,
    fontWeight: "400", 
  },
  blueTextBig:{
    fontSize: 12,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 15,
    color: "#30BFC1",
    letterSpacing: 0.3,
    fontWeight: "500", 
  },
  redText:{
    fontSize: 12,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 15,
    color: "rgba(204, 51, 61, 0.7)",
    letterSpacing: 0.3,
    fontWeight: "400", 
  },
  redTextBig:{
    fontSize: 12,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 15,
    color: "rgba(204, 51, 61, 0.7)",
    letterSpacing: 0.3,
    fontWeight: "500", 
  },
  grayText:{
    fontSize: 12,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 15,
    color: "#6B7280",
    letterSpacing: 0.3,
    fontWeight: "400", 
  },

  grayTextBig:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 15,
    color: "#6B7280",
    letterSpacing: 0.3,
    fontWeight: "500", 
  },
  oneLine:{
    width:10,
    backgroundColor:'#6B7280',
    height:3,
    marginTop:20,
  },
  twoLine:{
    width:10,
    backgroundColor:'#6B7280',
    height:3,
    marginTop:15,
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
    width:wp('88%'),
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
    fontFamily: "Urbanist-Medium",
    lineHeight: 21,
    fontWeight:'500',
    letterSpacing: 0.3,
      
  },
  mid:{
    width:wp('25%'),
    borderBottomWidth:1,
    padding:5,
    borderRightWidth:0,
    borderColor:'#E5E7EB',
  },
})