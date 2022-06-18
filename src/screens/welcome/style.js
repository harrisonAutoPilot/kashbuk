import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        //  flex: 1,
       height:hp('100%'),
        backgroundColor: '#E5E5E5',
        alignContent:'center',
       textAlign:'center',
      
      
    },
   top:{
       alignContent:'center',
       alignSelf:'center',
       width:wp('100%'),
       marginTop:Platform.OS === 'android' ? hp('8%') : hp('15%'),
   },
   logoImg:{
       width:110,
       height:110,
       resizeMode:'contain',
       alignSelf:'center',
   },
   Fcover:{
    width:wp('100%'),
    marginTop:-20
   },
   FlogoImg:{
    width:300,
    height:150,
    resizeMode:'contain',
    alignSelf:'center',
},
midTextCover:{
    width:wp('100%'),
    alignSelf:'center',
   paddingHorizontal:8.9,

},
midText:{
    fontSize: 38,
     fontFamily: "Helvetica",
    lineHeight: 40,
    color: "#06343C",
    letterSpacing: 0.3,
    alignSelf:'center',
   
},
btnCover:{
  marginTop:hp('20%'), 
}

});

export default styles