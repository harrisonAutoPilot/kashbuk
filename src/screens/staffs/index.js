import React, { useState, useEffect, useCallback } from "react";
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
    StatusBar, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
// import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { login } from "@Request/Auth";
// import { cleanup } from "@Store/Auth";
import { changePinSchema } from "@Helper/Schema";
import styles from "./style";
import {FormikValidator, InputField,NavHeaderWhite,NavHeaderWhiteTwo, BtnLg } from "@Component/index";

const Staffs = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [pinVisibilityConfirm, setPinVisibilityConfirm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)
    const showPinConfirm = () => setPinVisibilityConfirm(!pinVisibilityConfirm)
    const changePinState = {
        current_password: "",
        new_password: "",
        retype_password:"",
       
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
 
    const handleSignIn = async () =>{
        props.navigation.navigate('Login')
     };
    return (
        <View style={styles.container}>
           
           <NavHeaderWhiteTwo title="STAFF"  onPress={returnBack} />

        <View style={styles.inputContainer}>
            <View style={styles.headerCover}>
                    <View style={styles.line} />
                    <Text style={styles.memberCaption}>Members</Text>
                    <View style={styles.line} />
            </View>

            <View style={styles.ownerContainer}>
                <View style={styles.leftCover}>
                    <View style={styles.ownerCover}>
                    <Image source={require("@Assets/image/mee.jpg")} style={styles.ownerImg} />
                    </View>
                  <View style={styles.ownerDesCover}>
                  <Text style={styles.ownerNameText}>You</Text>
                  <Text style={styles.ownerPhoneText}>+2349999999999</Text>
                  </View>
                </View>
                <View style={styles.rightCover}>
                    <Text style={styles.ownerRoleText}>Admin</Text>
                </View>
            </View>


                
        </View>
        
           <View style={styles.middleContainer}>
                    <Text style={styles.middleCaption}>together u can record all ur transactions</Text>

                    <Image source={require("@Assets/image/kid.jpeg")} style={styles.vectorImg} />
                    
                </View>

                <View style={styles.btnCover}>
                    <BtnLg title="ADD STAFF" style={styles.createBtn} onPress ={() => props.navigation.navigate("AddStaff")}  styles={styles.btnText} />
                    <BtnLg title="Done" style={styles.createBtn1} styles={styles.btnText1} />
                </View>
        </View>
    )
};

export default Staffs;