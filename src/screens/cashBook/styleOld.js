import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    vontainer: {
        backgroundColor: '#fff',
        width: wp('100%'),
        height: hp('100%'),
        // justifyContent:'center',
        alignItems: 'center',
    },
    logoImg: {
        width: 40,
        height: 40,
    },
    logo1Img: {
        width: 70,
        height: 70,
    },
    logoCover:{
        marginTop:100,
        marginBottom:20,
        width:100,
        height:100,
        alignSelf:'center',
    backgroundColor:'#fff',
       elevation:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        // paddingBottom:20,
        flexDirection:'row',
       
        
    },
    smLetter: {
        color: 'violet',
        fontSize: 35,
        fontWeight: '600',
    },
    mdLetter: {
        color: 'gray',
        fontSize: 35,
        fontWeight: '100',
    },
    appName: {
        flexDirection: 'row'
    },
    mdLetterFlip: {
        color: 'gray',
        fontSize: 15,
        fontWeight: '100',
        fontStyle: 'italic'
    },
    smLetterFlip: {
        color: 'violet',
        fontSize: 15,
        fontWeight: '600',
    },
    // logoCover: {
    //     flexDirection: 'row',
    //     marginTop: 50,

    // },
    abrevCover: {
        flexDirection: 'row'
    },
    cover: {
        alignItems: 'center',
        width: wp('100%'),
    },
    imgCover: {
        width: 333,
        height: 333,
        borderRadius: 100,
        marginTop: 70,

    },
    imgSize: {
        width: 333,
        height: 323,
        borderRadius: 333 / 2,
        overflow: 'hidden',
        resizeMode: 'cover'
    },
    textCover: {
        marginTop: 15,
    },
    welcomeCover: {
        marginTop: 70,
        width: wp('100%'),
        paddingLeft: 30,
    },
    welcomeText: {
        fontSize: 23,
        color: '#212121',
        fontWeight: '600',
    },
    btnCover: {
        // top: Platform.OS === 'ios' ? hp('56.5%'): hp('70.5%'),
        // position: 'absolute',
        marginTop:20,
        // left:wp('2%'),
        zIndex:20,

    },
    btn: {
        backgroundColor: '#5f9a32',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius:30,
    },
    btnText: {
        color: '#fff',
        fontWeight: '600',
    },
    inputCover:{
        marginTop:Platform.OS === 'ios' ? 50 : 30,
    },
textField:{
    borderWidth:0,
    borderColor:'#bfbfbf',
    borderStyle:'solid',
    backgroundColor:'#bfbfbf',
    width:300,
    height:50,
    paddingLeft:20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius:30,
},
labelCover:{
    marginBottom:7,
},
labelText:{
    color:'#212121',
    fontWeight:'300', 
},
passwordCover:{
    marginTop:10,
},
absImg:{
    zIndex:0,
    width:240,
    height:330,
    position:'absolute',
    marginTop:50,
    left:wp('3%')
},
abs1Img:{
    zIndex:0,
    width:400,
    height:200,
    position:'absolute',
    marginTop:180,
    right:wp('-55%'),
},
abs2Img:{
    zIndex:0,
    width:300,
    height:300,
    position:'absolute',
    marginTop:150,
    right:wp('-85%'),
},
indexContainer:{
    elevation:5,
    // shadowColor:'#000',
    padding:10,
    width:wp('90%'),
    borderRadius:20,
    backgroundColor:"#fff",
    opacity:0.8,
    alignItems:'center',
    shadowOpacity:2,
    top:hp('0%'),
    
},
link1Cover:{
    flexDirection:'row',
    paddingTop:20,
},
dontText:{
    fontSize:14,
    fontWeight:'300'
},
dontText2:{
    fontSize:14,
    fontWeight:'300',
    color:'#5f9a32',
},
dontText3:{
    fontSize:14,
    fontWeight:'300',
    color:'#5f9a32',
    marginTop:10,
}

});

export default styles;