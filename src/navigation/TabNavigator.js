import 'react-native-gesture-handler';
import React from "react";
import { Image, Platform, View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Acon from 'react-native-vector-icons/AntDesign';
import Ocon from 'react-native-vector-icons/Octicons';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeStackNavigator, CashBookStackNavigator, SpaceStackNavigator, RecordStackNavigator,SettingStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: "red",
    inactiveTintColor: "gray",
    labelStyle: {fontSize: 10},
    showLabel:{Visible:false},
     showLabel: false,
    style: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
   
      
    //   borderTopRightRadius: 15,
      borderTopWidth: 1,
      borderTopColor:'red',
      borderTopStyle:'solid',
      // height: 60,
      shadowColor: 'rgb(230, 235, 243)',
      shadowOffset: {
        width: 0,
        height: -6,
      },
      shadowOpacity: 0.45,
      shadowRadius: 12,
      elevation: 10,
      paddingHorizontal: 18,
    },
    tabStyle: {
    //   height: 50,
      paddingHorizontal: 10,
    //   marginTop:0,
    //   backgroundColor:'transparent',
      
         
    },
    keyboardHidesTabBar: true,
    adaptive: false,
  };

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: Platform.OS === "android" ? styles.tabLable : null,
            tabBarActiveTintColor: "#fff",
            tabBarActiveBackgroundColor: "#0F8D8F",
            tabBarActiveBorderRadius:10,
            tabBarItemStyle:{margin:5, borderRadius:8,height:55,paddingBottom:Platform.OS === 'android' ? 0 : 10},
            tabBarInactiveTintColor: "#0F8D8F",
           
            tabBarStyle: { height: Platform.OS === "android" ? 70 : 80, borderRadius:10},
            
      

        }}>
            
        

 
                


        <Tab.Screen name="SpaceScreen" component={HomeStackNavigator} options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                {focused ? <View style={styles.tabLableTop}>
                                <Ocon name="home" color={color} size={18} style={styles.iconStyle} />
                                  </View> 
                                  : 
                                  <Ocon name="home" color= "#0F8D8F" size={18} style={styles.iconStyle} />
                                    }
                            </View>
                        ),
                    }}
            />


         <Tab.Screen name="CashBookScreen"  component={CashBookStackNavigator} options={{
                        tabBarLabel: 'Cash Book',
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                {focused ? <View style={styles.tabLableTop}>
                                <Acon name="wallet" color={color} size={18} style={styles.iconStyle} />
                                </View> 
                                  : 
                                  <Acon name="wallet" color= "#0F8D8F" size={18} style={styles.iconStyle} />
                                    }
                            </View>
                        ),
                    }}
            />


            <Tab.Screen name="BrowseScreen"  component={RecordStackNavigator} options={{
                        tabBarLabel: 'Records',
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                {focused ? <View style={styles.tabLableTop}>
                                <FIcon name="chart-box-outline" color={color} size={18} style={styles.iconStyle} />
                                </View> 
                                  : 
                                  <FIcon name="chart-box-outline" color= "#0F8D8F" size={18} style={styles.iconStyle} />
                                    }
                            </View>
                        ),
                    }}
            /> 
          
          <Tab.Screen name="ProfileScreen"  component={SettingStackNavigator} options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, focused }) => (
                            <View>
                                {focused ? <View style={styles.tabLableTop}>
                                <Icon name="user-circle" color={color} size={18} style={styles.iconStyle} />
                                </View> 
                                  : 
                                  <Icon name="user-circle" color= "#0F8D8F" size={18} style={styles.iconStyle} />
                                    }
                            </View>
                        ),
                    }}
            /> 
          
            
        </Tab.Navigator>
    )
   
};

export default BottomTabNavigator;