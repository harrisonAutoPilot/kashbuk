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
import { loginSchema } from "@Helper/Schema";
import styles from "./style";
import {FormikValidator, InputField, BtnLg } from "@Component/index";

const Login = (props) => {
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

    const submit = async (data) => {
        // setErrMsg("");
        // setLoader(true)
        // await dispatch(login(data));
        props.navigation.navigate('TabNavigator')
    };
     
    const handleSignUp = async () =>{
       props.navigation.navigate('SignUp')
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
 
    return (
        <View style={styles.container}>
           
            <View style={styles.top}>
                <Text style={styles.darkText}>Open your</Text>
               <Image style={styles.smLogo} source={require("@Assets/image/WordMark.png")} />
            </View>
          <View style={styles.midTitleCover}>
              <Text style={styles.midTitleText}>Log into your KashBuk account</Text>
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
                                                    <View style={[styles.inputHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                                                        <View style={styles.labelView}>
                                                            <Text style={styles.label}>PHONE NUMBER</Text>
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
                                                            <Text style={styles.label}>PIN</Text>
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
                                                                    <Icon name="eye-off" size={20} color="#878787" />
                                                                </TouchableOpacity>}
                                                        </View>

                                                    </View>
                                                    {props.touched.password && props.errors.password ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.password}</Text>
                                                        </View>) : null}
                                                </View> 
                                                <View style={styles.forget}>
                                                    <Text style={styles.forgetText}>Forget password?</Text>
                                                </View>                   
                
                                                   <View style={styles.btnCover}>
                                                      <BtnLg title="Login"  onPress={props.handleSubmit} style={styles.submit} />
                                                   </View>

                                                   <View style={styles.forGetCover}>
                                                       <Text style={styles.greyText}>Do you not have a KashBuk account?</Text>
                                                      <TouchableOpacity onPress={handleSignUp}>
                                                      <Text style={styles.colorText}> Sign up here</Text>
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
        
        
        </View>
    )
};

export default Login;