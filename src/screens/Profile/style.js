import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get("window");
const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const styles = StyleSheet.create({

  saveArea: {
    flex: 1,
    backgroundColor:"#fff"
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: wp('95%'),
    margin: 10,
    backgroundColor:"#fff",
    overflow: 'hidden',
    // height: HEADER_MAX_HEIGHT,
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    height:240,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
     elevation: 1,
    borderWidth:Platform.OS === 'android' ? 0 : 1,
    borderColor:'#bfbfbf',
    alignItems: 'center',
    marginTop:Platform.OS === 'android' ? 25 : 25,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: wp('100%'),
    height: HEADER_MAX_HEIGHT,

    alignItems: 'center',
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
  smCover: {
    borderRadius: 100,
    width: wp('98%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'violet',

    alignItems: 'center',
  },
  smContainer: {
    width: wp('90%'),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"#fff",
    marginTop: 155,
    //   shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 2,

    padding: 10,
  },
  list: {
    borderLeftWidth: 0,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  list1: {
    borderRightWidth: 0,
    borderColor: '#fff',
    alignItems: 'center',

  },
  item: {
    color: '#454545',
    fontSize: 16,
  },
  itemN: {
    color: '#5f9a32',
    fontSize: 22,
    fontWeight: '700',
  },
  camCover: {
    marginTop: Platform.OS === 'ios' ? 140 : 145,
    marginRight:Platform.OS === 'android' ? 160 : 180,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  camImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  iconImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  titleCover: {
    width:wp('100%'),
    marginTop: 20,
   alignSelf:'center',
   textAlign:'center'

  },
  smBtn:{
width:wp('50%'),
height:45,
backgroundColor:"#0F8D8F",
borderRadius:6,
justifyContent:'center'
  },
  titleText: {
    color: '#212121',
    fontSize: 20,
    fontWeight: '400',
    fontFamily:"Urbanist-SemiBold",
  },
  aboutContainer: {
    marginTop: Platform.OS === 'ios' ? 10 : 60,
    padding: 20,
    paddingTop: 15,
    backgroundColor:"#fff"
  },
  aboutTitle: {
    fontSize: 18,
    color: '#1A87DD',
    fontFamily:"Urbanist-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "600",
    marginTop: 3,
  
  },
  aboutContent: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-Regular",
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: "400",
    color:'#757575',
    marginTop: 12,
    backgroundColor:"#fff",
  },
  aboutCover: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    backgroundColor:"#fff"
  },
  editImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  editCover: {
    marginTop: Platform.OS === 'ios' ? 2 : -2,
    marginLeft: 10,
  },
  navCover: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('85%'),
    right: wp('45%'),
    top: hp('2%'),
    marginBottom:100,

  },
  postCover: {
    padding: 10,
    paddingLeft:20,
    
  },  
  inputCover: {
    borderWidth: 0,
    borderColor: '#454545',
    borderRadius: 50,
    width:wp('90%'),
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    // elevation: 2,
    borderWidth: 0,
    borderColor: '#f2f3ff',
    backgroundColor: '#d9d9d9',
    marginTop: 10,
    paddingLeft: 10,
    padding: 10,
    color: '#fff',

  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: "wrap"
  },
  card: {
    width: 110,
    height: 190,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  moreCover: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  dotImg: {
    width: 12,
    height: 12,
    marginTop: 2,
    position: 'absolute',
    left: 35,
  },
  smPostImg: {
    width: 80,
    height: 80,
    borderRadius: 100,

  },
  smTitleText: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-Regular",
    lineHeight: 14,
    letterSpacing: 0.2,
    fontWeight: "500",
    textAlign: 'center',
    color: '#424242',
    marginTop:5,

  },
  dateText: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.3,
    fontWeight: "400",
    textAlign: 'center',
    color: '#757575'
  },
  newPostCover:{
    position:'absolute',
    top:hp('80%'),
    right:wp('5%'),
    backgroundColor:'#5f9a32',
    width:60,
    height:60,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
  },
  penImg:{
    width:30,
    height:30,

  },
  statContainer:{
    flexDirection:'row',
    width:95,
    justifyContent:'space-between',
    padding:5,
    backgroundColor:'#f5f5f5',
    borderWidth:1,
    borderColor:'#f3f4f5',
    borderRadius:20,
    marginTop:5,
    marginBottom:3,
  },
  statCover:{
    flexDirection:'row',
    justifyContent:'center',
    width:40,
  },
  likeImg:{
    width:12,
    height:12,
    marginRight:2,
    marginTop:-1,

  },
  likeText:{
    fontSize:12,
    marginTop:-2,
    color:'#212121'
  },
  generalOptionCover:{
    width:wp('100%'),
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    marginBottom:10,
    marginTop:10,
  },
  listCover:{
    textAlign:'center',
    justifyContent:'flex-start',
    width:wp('79%')

  },
  iconCover:{
    alignItems:'center',
    justifyContent:'center'
  },
  optionText:{
    fontSize: 16,
    fontFamily: "Urbanist-Medium",
    lineHeight: 24,
    color: "#1A1A1A",
    letterSpacing: 0.3,
    fontWeight:'400'
  },
  optionTextLight:{
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 21,
    color: "#1A1A1A",
    letterSpacing: 0.3,
    fontWeight:'400'
  },
  horizontalLine:{
width:wp('90%'),
borderBottomWidth:1,
borderColor:'#f3f4f5'
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
btnCover:{
  width:wp('100%'),
  padding:10,
  alignSelf:'center',
  alignItems:'center',
  marginTop: 20,
  
  },
});

export default styles;