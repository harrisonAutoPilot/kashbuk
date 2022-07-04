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
import { addBusinessSchema } from "@Helper/Schema";
import styles from "./style";
import {FormikValidator, InputField,NavHeaderWhite, BtnLg } from "@Component/index";

const AddBusiness = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [pinVisibilityConfirm, setPinVisibilityConfirm] = useState(true);
    const [loader, setLoader] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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
    props.navigation.navigate('SelectBusiness')
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
            <Text style={styles.titleText}>Add Business</Text>
           </View>
        <View style={styles.inputContainer}>
            <View style={styles.titleCaption}>
                <Text style={styles.titleBgText}>BUSINESS DETAILS  </Text>
            </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
                    <KeyboardAwareScrollView>
                        <View >

                            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                                <View>

                                    <FormikValidator
                                        initialValues={addBusinessState}
                                        validationSchema={addBusinessSchema}
                                        onSubmit={(values) => {
                                            submit(values)
                                        }}>
                                        {props => (
                                            <View style={styles.inputCover}>
                                               
                                               <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.business_name && props.errors.business_name ? styles.inputErrHolder : null]}>
                                                       
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.business_name}
                                                                onBlur={props.handleBlur('business_name')}
                                                                placeholder="Business name"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('business_name', val)
                                                                    props.setFieldTouched('business_name', true, false);
                                                                    setErrMsg("")
                                                                }}
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
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.business_rc && props.errors.business_rc ? styles.inputErrHolder : null]}>
                                                        
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.business_rc}
                                                                onBlur={props.handleBlur('business_rc')}
                                                                placeholder="Rc Number"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                               
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('business_rc', val)
                                                                    props.setFieldTouched('business_rc', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                style={styles.inputFieldStyle}

                                                            />
                                                            
                                                        </View>

                                                    </View>
                                                    {props.touched.business_rc && props.errors.business_rc ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.business_rc}</Text>
                                                        </View>) : null}
                                                </View> 


                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.business_address && props.errors.business_address ? styles.inputErrHolder : null]}>
                                                       
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.business_address}
                                                                onBlur={props.handleBlur('business_address')}
                                                                placeholder="Add Business Address"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                multiline={true}
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('business_address', val)
                                                                    props.setFieldTouched('business_address', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                style={styles.inputFieldStyleM}

                                                            />
                                                           
                                                        </View>

                                                    </View>
                                                    {props.touched.business_address && props.errors.business_address ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.business_address}</Text>
                                                        </View>) : null}
                                                </View> 
                                                <View>
                                                    <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.start_date && props.errors.start_date ? styles.inputErrHolder : null]}>
                                                       
                                                        <View style={styles.pinInputView}>
                                                            <InputField
                                                                value={props.values.start_date}
                                                                onBlur={props.handleBlur('start_date')}
                                                                placeholder="Business start date"
                                                                placeholderTextColor="#757575"
                                                                keyboardType="number-pad"
                                                                onChangeText={(val) => {
                                                                    props.setFieldValue('start_date', val)
                                                                    props.setFieldTouched('start_date', true, false);
                                                                    setErrMsg("")
                                                                }}
                                                                style={styles.inputFieldStyle}

                                                            />
                                                          
                                                        </View>

                                                    </View>
                                                    {props.touched.start_date && props.errors.start_date ? (
                                                        <View style={styles.errView}>
                                                            <Text style={styles.errText}>{props.errors.start_date}</Text>
                                                        </View>) : null}
                                                </View> 

                                                   <View style={styles.btnCover}>
                                                      <BtnLg title="Add Business" onPress={props.handleSubmit}  style={styles.submit} />
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

export default AddBusiness;