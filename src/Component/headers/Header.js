import React, {useEffect} from "react";
import { StatusBar, View, SafeAreaView,Image, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./style";



const Header = (props) => {
   
   
    
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='transparent' hidden={false} />
            <View style={styles.mainBody}>
                <View style={styles.header}>
                    <SafeAreaView>
                        <View style={[ styles.headerIconView, props.bottom]}>
                            <TouchableOpacity style={styles.headerSubIconMenuView} onPress={props.drawer}>
                            {props.title ?
                                <View style={styles.browseView}>
                                    <Text style={[styles.headerTitle]}>{props.title}</Text>
                                </View> : null
                            } 
                            </TouchableOpacity>
                          
                            <View style={styles.headerSubIconView}>
                               
                                         
                                {props.profileImg ?
                                <View style={styles.browseView}>
                                     <Image source={props.profileImg} style={styles.profileImg} />
                                </View> 
                                :
                                <View style={styles.browseView}>
                                <Image source={require("@Assets/image/mee.jpg")} style={styles.profileImg} />
                                </View> 
                            } 
                                    
                              
                            </View>
                        </View>
                    </SafeAreaView>
                    {props.children}
                </View>
            </View>
        </View>
    )
};

export default Header;