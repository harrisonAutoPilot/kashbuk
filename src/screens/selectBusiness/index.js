import React, { useState, useEffect, useCallback } from "react";
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
    StatusBar, ScrollView,FlatList
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
// import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { login } from "@Request/Auth";
// import { cleanup } from "@Store/Auth";
import { addBusinessSchema } from "@Helper/Schema";
import data from "./data";
import styles from "./style";
import {FormikValidator, InputField,NavHeaderWhite, BtnLg } from "@Component/index";

const SelectBusiness = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [pinVisibilityConfirm, setPinVisibilityConfirm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [option, setOption] = useState("");
    const [active, setActive] = useState("0");
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  
    const selectUserType = item => {
      setActive(item.id);
      setOption(item.id);
    //   props.returnBack(item.id);
    };

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)
    const showPinConfirm = () => setPinVisibilityConfirm(!pinVisibilityConfirm)
    const addBusinessState = {
        business_name: "",
        business_rc: "",
        business_address:"",
        start_date:"",
       
    };

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

 // this is to return back to the Home Screen
 const returnBack = () => {
    props.navigation.navigate('Settings')
}

    const submit = async (data) => {
        // setErrMsg("");
        // setLoader(true)
        // await dispatch(login(data));
        props.navigation.navigate('Otp')
    };


    const renderItem = ({ item }) => (


        <TouchableOpacity
          onPress={() => { selectUserType(item);  setErrMsg("") }}
          style={[styles.optionView, item.id === active ? styles.optionViewBetween1 : styles.optionViewBetween2]}>
          <View style={active === item.id ? styles.optionIconView : styles.optionIconView2}>
            <View >
              {active && active === item.id ?
                <View style={styles.activeCover}>
                  
                  <View style={styles.optionTextCover}>
                    <Text style={styles.optionText}>{item.name}</Text>
                  </View>

                  <View style={styles.iconCircle}>
                    {/* <Image source={item.img}  style={styles.bikeImg} /> */}
                    <FIcon name="ios-checkbox-sharp" size={25} color="#0F8D8F" style={{borderRadius:10}}/>
    
                  </View>
                </View>
                :
                <View style={styles.activeCover}>
                 
                  <View style={styles.optionTextCover}>
                   <Text style={styles.optionText2}>{item.name}</Text>
                  </View>

                  {/* <View style={styles.iconCircle2}>
                  <FIcon name="globe" size={25} color="#000"/>
                  </View> */}
                </View>
              }
            </View>
          </View>
    
        </TouchableOpacity>
    
      );



 
    const handleSignIn = async () =>{
        props.navigation.navigate('Login')
     };
    return (
        <View style={styles.container}>
           
           <NavHeaderWhite onPress={returnBack} />

         
        <View style={styles.inputContainer}>
            <View style={styles.titleCaption}>
                <Text style={styles.titleBgText}>CHOOSE A BUSINESS </Text>
            </View>
       
                        <View >

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                   
                                            <View style={styles.inputCover}>
                                            
                                               <FlatList
                                                    data={data}
                                                    renderItem={renderItem}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    scrollEnabled={isScrollEnabled}

                                                />
                                            
                                             
                                                <View style={styles.btnCover}>
                                                      <BtnLg title="Add New Business" onPress={() => props.navigation.navigate("AddBusiness")}  style={styles.createBtn1} styles={styles.btnText} />
                                                   </View>
                                                   <View style={styles.btnCover}>
                                                      <BtnLg title="Done" onPress={props.handleSubmit}  style={styles.submit} />
                                                   </View>

                                                  
                                            </View>
            

                                    
                                </View>

                            </TouchableWithoutFeedback>

                        </View>
                  
               
        </View>
        
         {/* <View style={styles.btnCover}>
         <BtnLg title="Login" />
         </View> */}
        </View>
    )
};

export default SelectBusiness;