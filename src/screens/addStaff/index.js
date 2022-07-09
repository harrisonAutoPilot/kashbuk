import React, { useState, useEffect, useCallback } from "react";
import {
    View, Text, Image, TouchableOpacity, Keyboard,
    TouchableWithoutFeedback, ImageBackground,
    StatusBar, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/AntDesign';
import Fcon from "react-native-vector-icons/FontAwesome5"
Icon.loadFont();
// import { useSelector, useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { login } from "@Request/Auth";
// import { cleanup } from "@Store/Auth";
import { changePinSchema } from "@Helper/Schema";
import styles from "./style";
import {FormikValidator, InputField,NavHeaderWhite,NavHeaderWhiteTwo, BtnLg } from "@Component/index";

const AddStaff = (props) => {
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
        phone: "",
        
       
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
           
           <NavHeaderWhiteTwo title="Add STAFF"  onPress={returnBack} />

        <View style={styles.inputContainer}>
           <TouchableOpacity onPress={() => props.navigation.navigate("ContactsList")}>
           <View style={styles.contactContainer}>
                <View style={styles.contactLeftCover}>
                    <Fcon name="address-book" size={20} color="#328130" />
                    <Text style={styles.bookCaption}>Add from your contacts</Text>
                </View>
                        <AIcon name="right" size={16} color="#000" />
            </View>
           </TouchableOpacity>

            <View style={styles.headerCover}>
                    <View style={styles.line} />
                    <Text style={styles.memberCaption}>OR</Text>
                    <View style={styles.line} />
            </View>

           <View>
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
                        <View style={[styles.inputHolder, styles.inputPinHolder, props.touched.phone && props.errors.phone ? styles.inputErrHolder : null]}>
                            <View style={styles.labelView}>
                                <Text style={styles.label}>Phone Number</Text>
                            </View>
                            <View style={styles.pinInputView}>
                                <InputField
                                    value={props.values.phone}
                                    onBlur={props.handleBlur('phone')}
                                    placeholder="234 8133477586"
                                    placeholderTextColor="#757575"
                                    keyboardType="number-pad"
                                    // secureTextEntry={!pinVisibility}
                                    onChangeText={(val) => {
                                        props.setFieldValue('phone', val)
                                        props.setFieldTouched('phone', true, false);
                                        setErrMsg("")
                                    }}
                                    style={styles.inputFieldStyle}

                                />
                              
                            </View>

                        </View>
                        {props.touched.phone && props.errors.phone ? (
                            <View style={styles.errView}>
                                <Text style={styles.errText}>{props.errors.phone}</Text>
                            </View>) : null}
                    </View> 

                 


                      

                      
                </View>
            )}

        </FormikValidator>

        
    </View>

</TouchableWithoutFeedback>

</View>
           </View>


                
        </View>
        
          

                <View style={styles.btnCover}>
                    
                    <BtnLg title="ADD STAFF" style={styles.createBtn1} styles={styles.btnText1} />
                </View>
        </View>
    )
};

export default AddStaff;