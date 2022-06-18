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
import SelectLanguage from "./selectLanguage";
// import { login } from "@Request/Auth";
// import { cleanup } from "@Store/Auth";
import { registerSchema } from "@Helper/Schema";
import styles from "./style";
import {FormikValidator, InputField, BtnLg } from "@Component/index";

const SignUp = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [pinVisibilityConfirm, setPinVisibilityConfirm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)
    const showPinConfirm = () => setPinVisibilityConfirm(!pinVisibilityConfirm)
    const registerState = {
        phone: "",
        password: "",
        retype_password:"",
        business_name:""
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
           
            <View style={styles.top}>
                <Text style={styles.darkText}>Signup and keep track of your records</Text>
               {/* <Image style={styles.smLogo} source={require("@Assets/image/WordMark.png")} /> */}
            </View>
         
        <View style={styles.inputContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    <KeyboardAwareScrollView>
                        <View >

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={registerState}
                                        validationSchema={registerSchema}
                                        onSubmit={(values) => {
                                            submit(values)
                                        }}>
                                        {props => (
                                            <View style={styles.inputCover}>
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
                                                            <AIcon name="checkcircle" size={20} color="#0F8D8F"  />
                                                        </View>) : null}
                                                    {props.touched.phone && props.errors.phone ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.phone}</Text>
                                                        </View>) : null}
                                                </View>

                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.password && props.errors.password ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>4-Digit Pin</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.password}
                                                                onBlur={props.handleBlur('password')}
                                                                placeholder="****"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                secureTextEntry={pinVisibility}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('password', val)
                                                                    props.setFieldTouched('password', true, false);
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
                                                    {props.touched.password && props.errors.password ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.password}</Text>
                                                        </View>) : null}
                                                </View> 


                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.retype_password && props.errors.retype_password ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Confirm Pin</Text>
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
                                                    <SelectLanguage />
                                                </View>
                                                              
                
                                                   <View style={styles.btnCover}>
                                                      <BtnLg title="Create Account" onPress={props.handleSubmit}  style={styles.submit} />
                                                   </View>

                                                   <View style={styles.forGetCover}>
                                                       <Text style={styles.greyText}>Already have an account? </Text>
                                                       <TouchableOpacity onPress={handleSignIn}>
                                                      <Text style={styles.colorText}> Login</Text>
                                                      </TouchableOpacity>
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

export default SignUp;