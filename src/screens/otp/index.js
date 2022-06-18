import React, { useState, useEffect, useCallback } from "react";
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
    StatusBar, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
// import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { login } from "@Request/Auth";
// import { cleanup } from "@Store/Auth";
import { loginSchema } from "@Helper/Schema";
import styles from "./style";
import {FormikValidator, InputField, BtnLg } from "@Component/index";

const Otp = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const showPin = () => setPinVisibility(!pinVisibility)

    const loginState = {
        phone: "",
        password: ""
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

    const handlePost = async (data) => {
        // setErrMsg("");
        // setLoader(true)
        // await dispatch(login(data));
        props.navigation.navigate('TabNavigator')
    };
 
    return (
        <View style={styles.container}>
            <View style={styles.backCover}>
            <Image style={styles.backImg} source={require("@Assets/image/back_arrow.png")} />
            <Text style={styles.backText}>verify</Text>
            </View>
           
            <View style={styles.top}>
                <Text style={styles.darkText}>Please enter the  6-digit OTP sent to you at</Text>
                <Text style={styles.colorText}>+234 810 233 4490</Text>
              
            </View>
          <View style={styles.midImgCover}>
          <Image style={styles.otpImg} source={require("@Assets/image/otp_phone.png")} />
          </View>
        <View style={styles.inputContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    <KeyboardAwareScrollView>
                        <View >

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={loginState}
                                        validationSchema={loginSchema}
                                        onSubmit={(values) => {
                                            submit(values)
                                        }}>
                                        {props => (
                                            <View style={styles.inputCover}>
                                 

                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.password && props.errors.password ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>Enter OTP</Text>
                                                        </View>
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.password}
                                                                onBlur={props.handleBlur('password')}
                                                                placeholder="6-4-5-1-3-0"
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
                                                                <TouchableOpacity onPress={showPin}>
                                                                    <Icon name="eye" size={30} color="red" style={styles.showTextPin} />
                                                                </TouchableOpacity> :
                                                                <TouchableOpacity onPress={showPin}>
                                                                    <Icon name="eye-off" size={30} color="red" style={styles.showTextPin} />
                                                                </TouchableOpacity>}
                                                        </View>

                                                    </View>
                                                    {props.touched.password && props.errors.password ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.password}</Text>
                                                        </View>) : null}
                                                </View> 
                                                               
                
                                                   <View style={styles.btnCover}>
                                                      <BtnLg title="Verify" onPress={handlePost} style={styles.submit} />
                                                   </View>

                                                   <View style={styles.forGetCover}>
                                                       <Text style={styles.greyText}>Resend OTP in </Text>
                                                       <Text style={styles.colorText}> (00:24)</Text>
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

export default Otp;