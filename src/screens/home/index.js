import React, { useState,useRef, Easing,useEffect, useCallback } from "react";
import {
    View, Text, Image,Button, TouchableOpacity, Animated,FlatList,SafeAreaView,animated, Keyboard,
    StatusBar,
} from "react-native";
import { Header, GeneralStatusBarColor} from "@Component";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import Fcon from 'react-native-vector-icons/Feather';
import { registerSchema } from "@Helper/Schema";
import styles from "./style";
import data from "./data";


const Home = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [viewAll, setViewAll] = useState(true);
    const [viewLast, setViewLast] = useState(false);
    const [pinVisibilityConfirm, setPinVisibilityConfirm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [showBtn, setShowBtn] = useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(0);
  

    const runAnimationOnClick = () => {
        setShowBtn(!showBtn)
        scaleValue.current = scaleValue.current === 0 ? 1 : 0;
        Animated.spring(animationValue, {
          toValue: scaleValue.current,
          useNativeDriver: true
        }).start();
      };

      const runAnimationOnClickReverse = () => {
        setShowBtn(true)
        scaleValue.current = scaleValue.current === 0 ? 1 : 0;
        Animated.spring(animationValue, {
          toValue: scaleValue.current,
          useNativeDriver: true
        }).start();
      };

      
    const receipt =()=>{
     props.navigation.navigate('Receipt')
    }

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

   const changeAll =() => {
   setViewAll(false);
   setViewLast(true)


   }
   const changeLast =() => {
    setViewAll(true);
    setViewLast(false)
    }
   

    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;
    
        return (
            <View style={styles.listCover}>
            <View style={styles.itemTitle}>
            <Text style={styles.itemTitleText}>{item.title}</Text>
            </View>
            <View style={styles.itemBottomCover}>
                <View style={styles.itemLeftCover}>
                    <View>
                        <Text style={styles.itemDate}>{item.time}</Text>
                      </View>
                   <TouchableOpacity onPress={receipt}>
                   <View style={styles.receiptCover}>
                       <Icon name="document-text-outline" color="#789EE0" size={12} style={styles.docStyle} />
                        <Text style={styles.receiptText}>Raise a Receipt</Text>
                    </View>
                   </TouchableOpacity>
                </View>
                <View style={styles.itemRightCover}>
                    <View >
                        <Text style={styles.itemAmount}>₦ {item.amount}</Text>
                    </View>
                    <View style={styles.modeCover}>
                         <Text style={styles.modeText}>{item.mode}</Text>
                    </View>
                </View>
            </View>
            </View>

        )
    };

  
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'red'} barStyle={'dark-content'} translucent={true} /> 
        <View style={styles.topCover}>
            <Header  title="CHI BEST"/>
        </View>

        {/* this is for the dashboard in the home screen */}
        <View style={styles.dashboardCover}>
            <View style={styles.dashboardTopCover}> 
            <View style={styles.leftTopDashboard}>

            <View style={styles.leftInner}>
                    <FIcon name="long-arrow-alt-down" color="rgba(50, 129, 48, 0.7)" size={30} style={styles.arrowStyle} />
                    <View style={styles.valuesCover}>
                        <Text style={styles.totalCaption}>Today’s IN</Text>
                        <Text style={styles.totalValue}>₦ 5,455</Text>
                    </View>
                    </View>
                    
            </View>
            
            <View style={styles.rightTopDashboard}>
                    <View style={styles.rightInner}>
                    <FIcon name="long-arrow-alt-up" color="rgba(204, 51, 61, 0.7)" size={30} style={styles.arrowStyle} />
                    <View style={styles.valuesCover}>
                    <Text style={styles.totalCaptionRed}>Today’s OUT</Text>
                    <Text style={styles.totalValueRed}>₦ 5,455</Text>
                    </View>
                    </View>
                    
            </View>
            </View>
            <View style={styles.dashboardBottomCover}> 
                <Text style={styles.titleCaption}>Today’s  Balance</Text>
                <Text style={styles.balanceText}>₦ 16,543</Text>
            </View>
        </View>

        {/* this is where the list container start */}
       
       
    
  
       
        <View style={styles.listContainer}>
        
         

            <View style={styles.containerHeader}>
                { viewLast ?
                <Text style={styles.lastCaption}> All Transactions</Text>
                :
                <Text style={styles.lastCaption}> Last Transactions</Text>
                }
                
               {
                   viewAll ?
                   <TouchableOpacity onPress={changeAll}>
                   <Text style={styles.viewAllText}> View All</Text>
                   </TouchableOpacity>
                   :
                   <TouchableOpacity onPress={changeLast}>
                   <Text style={styles.viewAllText}> View Last</Text>
                   </TouchableOpacity>
               }

               
            </View>

           <View style={styles.flatListCover}>
           <FlatList
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={true}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={ListView}
                  ListFooterComponent={<View style={{ height: 50 }} />}
                  columnWrapperStyle={styles.column}
              />
            
           </View>
           
        </View>
        <View>
                    <View style={styles.flowCover}>
                    <Animated.View
                            style={{
                            height: 220,
                            width: 180,
                            borderRadius:10,
                            // backgroundColor: "red",
                            transform: [
                                {
                                scale: animationValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                })
                                }
                            ]
                            }}
                        >

                        <TouchableOpacity onPress={() => props.navigation.navigate('AddMultiple')}>
                        <View style={styles.smBtnOne}>
                            <View style={styles.smBtnInner}>
                            <Image style={styles.smLogo} source={require("@Assets/image/add_icon.png")} />
                            </View>
                          <View style={styles.innerTextCover}>
                             <Text style={styles.innerText}>Send a quote</Text> 
                          </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AddMultipleExpenses')}>
                        <View style={styles.smBtnTwo}>
                            <View style={styles.smBtnInner}>
                            <Image style={styles.smLogo} source={require("@Assets/image/arcticons_myexpenses.png")} />
                            </View>
                          <View style={styles.innerTextCover}>
                             <Text style={styles.innerText}>Record an expense</Text> 
                          </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AddMultiple')}>
                        <View style={styles.smBtnThree}>
                            <View style={styles.smBtnInner}>
                            <Image style={styles.smLogo} source={require("@Assets/image/arcticons_aviasales.png")} />
                            </View>
                          
                          <View style={styles.innerTextCover}>
                             <Text style={styles.innerText}>Record a sale</Text> 
                          </View>
                          
                        </View>
                        </TouchableOpacity>

                </Animated.View>
                    </View>
      
    </View>
       { showBtn ?
        <TouchableOpacity style={styles.floatingBtn} onPress={runAnimationOnClick} >
               <View>
               <Fcon name="plus" size={28} color="#000" />
                </View>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.floatingBtn} onPress={runAnimationOnClick} >
        <View>
                <Fcon name="x" size={25} color="#fff" />
            </View>
    </TouchableOpacity>
    }
        </SafeAreaView>
    )
};

export default Home;