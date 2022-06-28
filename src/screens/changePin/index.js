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
import {FormikValidator, InputField,NavHeaderWhite, BtnLg } from "@Component/index";

const ChangePin = (props) => {
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
           
           <NavHeaderWhite onPress={returnBack} />

           <View style={styles.titleCover}>
            <Text style={styles.titleText}>Change Pin</Text>
           </View>
        <View style={styles.inputContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    <KeyboardAwareScrollView>
                        <View >

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={changePinState}
                                        validationSchema={changePinSchema}
                                        onSubmit={(values) => {
                                            submit(values)
                                        }}>
                                        {props => (
                                            <View style={styles.inputCover}>
                                               
                                               <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.password && props.errors.password ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Current Pin</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.current_password}
                                                                onBlur={props.handleBlur('current_password')}
                                                                placeholder="****"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                secureTextEntry={!pinVisibility}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('current_password', val)
                                                                    props.setFieldTouched('current_password', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                style={styles.inputFieldStyle}

                                                            />
                                                          
                                                        </View>

                                                    </View>
                                                    {props.touched.current_password && props.errors.current_password ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.current_password}</Text>
                                                        </View>) : null}
                                                </View> 

                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.password && props.errors.password ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>New Pin</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.new_password}
                                                                onBlur={props.handleBlur('new_password')}
                                                                placeholder="****"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                secureTextEntry={pinVisibility}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('new_password', val)
                                                                    props.setFieldTouched('new_password', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                style={styles.inputFieldStyle}

                                                            />
                                                            {pinVisibility ?
                                                                <TouchableOpacity onPress={showPin} style={styles.eyeCover}>
                                                                    <Icon name="eye" size={20} color="#878787" />
                                                                </TouchableOpacity> :
                                                                <TouchableOpacity onPress={showPin} style={styles.eyeCover}>
                                                                    <Icon name="eye-off" size={20} color="#878787"  />
                                                                </TouchableOpacity>}
                                                        </View>

                                                    </View>
                                                    {props.touched.new_password && props.errors.new_password ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.new_password}</Text>
                                                        </View>) : null}
                                                </View> 


                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.retype_password && props.errors.retype_password ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Confirm New Pin</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.retype_password}
                                                                onBlur={props.handleBlur('retype_password')}
                                                                placeholder="****"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                secureTextEntry={pinVisibilityConfirm}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('retype_password', val)
                                                                    props.setFieldTouched('retype_password', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                style={styles.inputFieldStyle}

                                                            />
                                                            {pinVisibilityConfirm ?
                                                                <TouchableOpacity onPress={showPinConfirm} style={styles.eyeCover}>
                                                                    <Icon name="eye" size={20} color="#878787" />
                                                                </TouchableOpacity> :
                                                                <TouchableOpacity onPress={showPinConfirm} style={styles.eyeCover}>
                                                                    <Icon name="eye-off" size={20} color="#878787" />
                                                                </TouchableOpacity>}
                                                        </View>

                                                    </View>
                                                    {props.touched.retype_password && props.errors.retype_password ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.retype_password}</Text>
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
        
         {/* <View style={styles.btnCover}>
         <BtnLg title="Login" />
         </View> */}
        </View>
    )
};

export default ChangePin;