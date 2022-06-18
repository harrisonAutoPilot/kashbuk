import React, { useState, useCallback } from "react";
import { View, Text,Image, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Header, NavHeaderWhite } from "@Component";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import styles from "./style";

import Signin from "./Signin";
import Signup from "./Signup"



const CashBook = (props, navigation) => {

    // const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const [selectedCallingCode, setSelectedCallingCode] = useState('90'); 


  
    const returnBack = () => {
        props.navigation.navigate('TabNavigator')
    }


    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
             <NavHeaderWhite onPress={returnBack} />
           <LinearGradient
        
        // colors={['#f9d2f9', '#ca1cca']}
        // style={styles.container} colors={['#f9d2f9', '#ca1cca']}
        // colors={['#fff', '#f5f5f5']}
        style={{marginTop:10, zIndex:900, borderRadius:10, padding:0, width:wp('95%'), alignSelf:'center',}}
        colors={['#0F8D8F', '#0F8D8F']}
        start={{ x: 1, y: 1.2}}
        end={{ x: 0.2, y: 0.2}}
        >     
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={(props) => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>You’ll Get</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={(props) => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>You Owe</Text>
                    </TouchableOpacity>
                </View>
              
              
            </LinearGradient>
        
            {activeId === 1 ? <Signin props={props} navigation={navigation} /> : <Signup props={props} navigation={navigation} />}  
        </View>
    )
};

export default CashBook;