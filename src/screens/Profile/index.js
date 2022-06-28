import React, { useState, useRef, Easing, useEffect, useCallback } from "react";
import {
    View, Text, TextInput, Image, Button,ScrollView, TouchableOpacity, Animated, FlatList, SafeAreaView, animated, Keyboard,
    StatusBar,
    TouchableWithoutFeedback, ImageBackground,
  
} from "react-native";
import { Header, NavHeaderWhite,NavHeader, BtnLg, GeneralStatusBarColor,FormikValidator, InputField } from "@Component";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import commafy from "@Helper/Commafy";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FIcon from 'react-native-vector-icons/Feather';
import Mcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native'
import Fcon from 'react-native-vector-icons/AntDesign';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { profileSchema } from "@Helper/Schema";
import styles from "./style";




const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Profile = ({ props, navigation }) => {
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
    const [pinVisibility, setPinVisibility] = useState(true);
    const [pinVisibilityConfirm, setPinVisibilityConfirm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    const showPin = () => setPinVisibility(!pinVisibility)
    const showPinConfirm = () => setPinVisibilityConfirm(!pinVisibilityConfirm)

    const profileState = {
      username: "",
      phone: "",
      business_name:"",
      business_address:"",
  };


    const showPicker = () => {
        setIsPickerShow(true);
    };

    const passData = (childData) => {
        setChildData(childData);
       
      };

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

    const selectUserType = id => {
        setActive(id);
        setErr("")
    }

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => {
              setKeyboardVisible(true); // or some other action
          }
      );
      const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => {
              setKeyboardVisible(false); // or some other action
          }
      );
      return () => {
          // dispatch(cleanup())
          keyboardDidHideListener.remove();
          keyboardDidShowListener.remove();
      }
  }, []);



  const submit = async (data) => {
    // setErrMsg("");
    // setLoader(true)
    // await dispatch(login(data));
    props.navigation.navigate('Otp')
};

const handleSignIn = async () =>{
  props.navigation.navigate('Login')
};


    const RenderListItem = ({ item, index }) => {
        return (
            <>
                {data.map((item) => (
              <View style={styles.card} key ={item.id}>
              <View style={styles.moreCover}>
              {/* <Image source={require("../../assets/more.png")} style={styles.dotImg} /> */}
              </View>
                <Image source= {item.img} style={styles.smPostImg} />
                <View style={styles.statContainer}>
                  <View style={styles.statCover}>
                     {/* <Image source={require("../../assets/like.png")} style={styles.likeImg} /> */}
                     <Text style={styles.likeText}>{item.like}k</Text>
                  </View>
                   <View style={styles.statCover}>
                     {/* <Image source={require("../../assets/relations.png")} style={styles.likeImg} /> */}
                     <Text style={styles.likeText}>{item.relate}k</Text>
                  </View> 
                </View>
                <Text style={styles.smTitleText} numberOfLines={2} >{item.title}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
                </View>
         ))}
            </>
        )
      };
      




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
      navigation.navigate('Settings')
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
       
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    <KeyboardAwareScrollView>
                        <View >

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={profileState}
                                        validationSchema={profileSchema}
                                        onSubmit={(values) => {
                                            submit(values)
                                        }}>
                                        {props => (
                                            <View style={styles.inputCover}>
                                              <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.business_name && props.errors.business_name ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Username</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.username}
                                                                onBlur={props.handleBlur('username')}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('username', val)
                                                                    props.setFieldTouched('username', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                numberOfLines={2}
                                                                multiline
                                                                style={styles.inputFieldStyle}

                                                            />
                                                           
                                                        </View>

                                                    </View>
                                                    {props.touched.username && props.errors.username ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.username}</Text>
                                                        </View>) : null}
                                                </View> 
                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.business_name && props.errors.business_name ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Business Name</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.business_name}
                                                                onBlur={props.handleBlur('business_name')}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('business_name', val)
                                                                    props.setFieldTouched('business_name', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                numberOfLines={2}
                                                                multiline
                                                                style={styles.inputFieldStyle}

                                                            />
                                                           
                                                        </View>

                                                    </View>
                                                    {props.touched.business_name && props.errors.business_name ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.business_name}</Text>
                                                        </View>) : null}
                                                </View> 
                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.business_name && props.errors.business_name ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Business Address</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.business_address}
                                                                onBlur={props.handleBlur('business_address')}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('business_address', val)
                                                                    props.setFieldTouched('business_address', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                numberOfLines={2}
                                                                multiline
                                                                style={styles.inputFieldStyle}

                                                            />
                                                           
                                                        </View>

                                                    </View>
                                                    {props.touched.business_address && props.errors.business_address ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.business_address}</Text>
                                                        </View>) : null}
                                                </View> 
                                               
                                                <View>
                                                    <View style={[styles.inputHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Phone Number</Text>
                                                        </View>

                                                        <InputField
                                                            value={props.values.phone}
                                                            onBlur={props.handleBlur('phone')}
                                                            placeholder="234809XXXXXXX"
                                                            placeholderTextColor="#757575"
                                                            keyboardType="number-pad"
                                                            onChangeText={(val) => {
                                                                props.setFieldValue('phone', val)
                                                                props.setFieldTouched('phone', true, false);
                                                                setErrMsg("")
                                                            }}
                                                            style={styles.inputFieldStyle}
                                                            autoFocus={true}
                                                            maxLength={13}
                                                        />
                                                    </View>
                                                    {props.touched.phone && props.values.phone.toString().length  === 13 ? (
                                                        <View style={styles.checkView}>
                                                            <Fcon name="checkcircle" size={20} color="#0F8D8F"  />
                                                        </View>) : null}
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                   <View style={styles.btnCover}>
                                                      <BtnLg title="Update" onPress={props.handleSubmit}  style={styles.submit} />
                                                   </View>

                                                  
                                            </View>
                                        )}

                                    </FormikValidator>

                                    
                                </View>

                            </TouchableWithoutFeedback>

                        </View>
                    </KeyboardAwareScrollView>
                </ScrollView>
     
        
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
                 marginTop:70,
                 alignItems:'center',
                 alignSelf:'center',
              },
            ]}
            source={require('@Assets/image/sam.jpeg')} 
          />
         <View style={styles.navCover}>
            <TouchableOpacity onPress={goBack}>
       <Fcon name="left" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Profile</Text>
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
          {/* <View style={styles.smContainer}>
       
    
          </View> */}
         
        </Animated.View>
       
        
        
      </SafeAreaView>
    );
  }
  
  
  
  export default Profile;