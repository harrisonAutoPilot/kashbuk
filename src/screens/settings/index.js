import React, { useState, useRef, Easing, useEffect, useCallback } from "react";
import {
    View, Text, TextInput, Image, Button, TouchableOpacity, Animated, FlatList, SafeAreaView, animated, Keyboard,
    StatusBar,
} from "react-native";
import { Header, NavHeaderWhite,NavHeader, BtnLg, GeneralStatusBarColor } from "@Component";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import commafy from "@Helper/Commafy";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FIcon from 'react-native-vector-icons/Feather';
import Mcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native'
import Fcon from 'react-native-vector-icons/AntDesign';
import { registerSchema } from "@Helper/Schema";
import LanguageOption from "./LanguageOptions";
import CurrencyOption from "./CurrencyOptions";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from "./style";



const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Settings = ({ props, navigation }) => {
    const [errMsg, setErrMsg] = useState("");
    // const result = props.result;
    const [active, setActive] = useState(1);
    const [err, setErr] = useState("");
    const [viewAll, setViewAll] = useState(true);
    const [isOnBlueToggleSwitch, SetIsOnBlueToggleSwitch] = useState(true)
    const [category, setCategory] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [cartAmount, setCartAmount] = useState(1);
    const [newValue, setnewValue] = useState(1);
    const [adding, setAdding] = useState(false);
    const [childData, setChildData] = useState("");
    const [showLanguage, setShowLanguage] = useState(false);
    const [showCurrency, setShowCurrency] = useState(false);
    



    const showPicker = () => {
        setIsPickerShow(true);
    };

    const passData = (childData) => {
        setChildData(childData);
       
      };

      const showLanguageOptions = () => setShowLanguage(true);

      const showCurrencyOptions = () => setShowCurrency(true);

    const onChange = (event, value) => {
        setDate(value);
        console.log(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };
    // this is to return back to the Home Screen
    const returnBack = () => {
        props.navigation.navigate('AddMultiple')
    }

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const handleChange = (event = {}) => {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;

        setItemName([name], value);
    }

    const increaseCart = () => {
        // setErr("")
        // if (result.quantity_available > cartAmount) return 
        setCartAmount(cartAmount + 1)
    };

    const decreaseCart = () => {
        // setErr("")
        if (cartAmount > 1) return setCartAmount(cartAmount - 1);
    };
    const onToggle = (isOn) => {
        console.log("Changed to " + isOn);
    }

    const disLanguage = (id) => {
      console.log(id);
      setShowLanguage(false)
    }

    const disCurrency = (id) => {
      console.log(id);
      setShowCurrency(false)
    }

    const selectUserType = id => {
        setActive(id);
        setErr("")
    }

   
    const scrollY = useRef(new Animated.Value(0)).current;
    const [visible, setVisible] = useState(false);
    const headerTranslateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });
  
    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
  
    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.9],
      extrapolate: 'clamp',
    });
    const titleTranslateY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    
    });
  
    const goBack = () => {
      navigation.navigate('HomeStat')
   }

    return (
      <SafeAreaView style={{backgroundColor:"#fff", flex:1}}>
         
       
        <Animated.ScrollView
          contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT - 32}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}>
            
        <View style={styles.aboutContainer}>
          <View>
            <View style={styles.aboutCover}>
              <Text style={styles.aboutTitle}>General</Text>
              </View>
            <View>
            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                  <FIcon name="globe" size={22} color="#000"/>
                </View>
               <TouchableOpacity onPress={showLanguageOptions}>
               <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Language and location
                    </Text>
                    <Text style={styles.optionTextLight}>
                    Change the language of the app.
                    </Text>
                </View>
               </TouchableOpacity>
            </View>

            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                  <Icon name="person-circle" size={22} color="#000"/>
                </View>
                <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Add Staff
                    </Text>
                    <Text style={styles.optionTextLight}>
                    Add a new Staff / Shop Keeper.
                    </Text>
                </View>
            </View>

            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                  <FIcon name="lock" size={22} color="#000"/>
                </View>
               <TouchableOpacity onPress={() => navigation.navigate("ChangePin")}>
               <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Change Pin
                    </Text>
                    <Text style={styles.optionTextLight}>
                    Change Password/Pin
                    </Text>
                </View>
               </TouchableOpacity>
            </View>


            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                  <Mcon name="currency-usd" size={22} color="#000"/>
                </View>
                <TouchableOpacity onPress={showCurrencyOptions}>
                <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Choose Currency
                    </Text>
                    <Text style={styles.optionTextLight}>
                    Change Currency
                    </Text>
                </View>
                </TouchableOpacity>
            </View>

            {/* this is horizontal line */}
            <View style={styles.horizontalLine} />

            <View style={styles.aboutCover}>
              <Text style={styles.aboutTitle}>Notifications</Text>
              </View>

            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                  <Icon name="briefcase-outline" size={22} color="#000"/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("SelectBusiness")}>
                <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Add Business
                    </Text>
                    <Text style={styles.optionTextLight}>
                    Add a new business
                    </Text>
                </View>
              </TouchableOpacity>
            </View>

     <View style={styles.horizontalLine} />

            <View style={styles.aboutCover}>
            <Text style={styles.aboutTitle}>More</Text>
            </View>

            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                <FIcon name="info" size={22} color="#000"/>
                </View>
                <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    How to use
                    </Text>
                    <Text style={styles.optionTextLight}>
                    For more information
                    </Text>
                </View>
            </View>

            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                <FIcon name="phone-call" size={22} color="#000"/>
                </View>
                <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Contact us
                    </Text>
                   
                </View>
            </View>
           

            <View style={styles.generalOptionCover}>
                <View style={styles.iconCover}>
                <FIcon name="log-out" size={22} color="#000"/>
                </View>
                <View style={styles.listCover}>
                    <Text style={styles.optionText}>
                    Logout
                    </Text>
                    
                </View>
            </View>
            
            </View>
          </View>
        </View>
  
        

        </Animated.ScrollView>
        <Animated.View
          style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <View style={{alignItems:'center',width:wp('100%'),  justifyContent:'center', position:'absolute', left:wp('32%')}}>
         
        <Animated.Image
            style={[
              styles.headerBackground,
              {
                opacity: imageOpacity,
                transform: [{translateY: imageTranslateY}],
                width:110,
                 height:110,
                 borderRadius:100,
                 marginTop:20,
                 alignItems:'center',
                 alignSelf:'center',
              },
            ]}
            source={require('@Assets/image/sam.jpeg')} 
          />
         <View style={styles.navCover}>
            {/* <TouchableOpacity onPress={goBack}>
       <Fcon name="left" size={20} color="#000" />
            </TouchableOpacity> */}
  
            <TouchableOpacity style={{zIndex:90}}>
            {/* <Image source={require("../../assets/gear.png")} style={styles.iconImg} /> */}
            </TouchableOpacity>
          </View>
        <TouchableOpacity>
        <View style={styles.camCover}>
          <Image source={require("@Assets/image/photo-camera.png")} style={styles.camImg} />
          </View>
        </TouchableOpacity>
            <View style={styles.titleCover}>
            <Text style={styles.titleText}>Festus Emeka</Text>
          </View>
        </View>
          <View style={styles.smContainer}>
       
      <BtnLg  title="Edit Profile" style={styles.smBtn} onPress={() => navigation.navigate('Profile')} />
          </View>
         

          <LanguageOption
                visibleRetrieve={showLanguage}
                returnBack={(id) => disLanguage(id)}
            />
            <CurrencyOption
                visibleCurrency={showCurrency}
                returnBack={(id) => disCurrency(id)}
            />
        </Animated.View>
       
        
        
      </SafeAreaView>
    );
  }
  
  
  
  export default Settings;