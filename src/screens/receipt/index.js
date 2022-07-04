import React, { useState, useRef, Easing, useEffect, useCallback } from "react";
import {
    View, Text, TextInput, Image, Button, TouchableOpacity, Animated, FlatList, SafeAreaView, animated, Keyboard,
    StatusBar,
} from "react-native";
import { Header, NavHeaderWhiteTwo, BtnLg, GeneralStatusBarColor } from "@Component";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-toast-message';
import commafy from "@Helper/Commafy";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Acon from 'react-native-vector-icons/AntDesign';
import PaymentLevel from "./selectLevel";
import ToggleSwitch from 'toggle-switch-react-native'
import Fcon from 'react-native-vector-icons/Feather';
import { registerSchema } from "@Helper/Schema";

import styles from "./style";
import data from "./data";
import payment from "./payment";


const Receipt = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const result = props.result;
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



    const showPicker = () => {
        setIsPickerShow(false);
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
        props.navigation.navigate('Homee')
    }

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const handleChange = (event = {}) => {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;

        setItemName([name], value);
    }
    const regex = new RegExp("^0+(?!$)", 'g');
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

    const renderItem = ({ item }) => (
        <View style={[styles.optionView, item.id === "1" ? styles.optionViewBetween1 : styles.optionViewBetween2]}>

            <TouchableOpacity style={active === item.id ? styles.optionViewCover : styles.optionViewCover2} onPress={() => { selectUserType(item.id); setCategory(item.title); setErrMsg("") }}>
                <View >
                    {active && active === item.id ?
                        <View style={styles.iconCircle}>
                            <FIcon name="check" size={14} color="#fff" style={styles.icon} />
                        </View>
                        :
                        <View style={styles.iconCircle2}>
                        </View>
                    }
                </View>
                <View style={active === item.id ? styles.optionTextView : styles.optionTextView2} >
                    <Text style={styles.optionText}>{item.title}</Text>
                    {/* <View style={styles.optionMiniTextView}>
                        <Text style={styles.itemDetails}>{item.id == "1" ? ` Balance: ₦${wallet.balance ? commafy(wallet.balance) : 0}`
                            : item.id == "2" ? "Pay on Delivery" : "Remedial Health Solutions Ltd"}</Text>
                    </View> */}
                </View>
            </TouchableOpacity>

        </View>
    );



    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;

        return (
            <View style={styles.listItem}>
                <Text style={styles.itemList}>{item.menu}</Text>
                <View>
                    <View style={styles.rightCover}>
                        <Text style={styles.itemAmount}>{item.amount}</Text>
                        <TouchableOpacity >
                            <Fcon name="x" size={18} color="#6B7280" style={{ paddingLeft: 5 }} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
            <NavHeaderWhiteTwo title="Receipt" onPress={returnBack} />
                <View style={styles.topSmTitle}>
                    <Text style={styles.topSmTitleText}>Create Receipt Product / Service</Text>
                </View>


                <View style={styles.recordsContainer}>
                    <View>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Item name"
                            onChangeText={itemName => setItemName(itemName)}
                            defaultValue={itemName}
                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder="cost price"
                            keyboardType="number-pad"
                            onChangeText={itemAmount => setItemAmount(itemAmount)}
                            defaultValue={itemAmount}
                        />
                    </View>

                    <View style={styles.dateContainer}>
                    <TextInput
                            style={styles.textInputSm}
                            placeholder="margin %"
                            keyboardType="number-pad"
                            onChangeText={itemAmount => setItemAmount(itemAmount)}
                            defaultValue={itemAmount}
                        />
                        <TextInput
                            style={styles.textInputSm}
                            placeholder="setting price"
                            keyboardType="number-pad"
                            onChangeText={itemAmount => setItemAmount(itemAmount)}
                            defaultValue={itemAmount}
                        />
                    </View>
                    <View style={styles.quantityCover}>
                          
                           <Text style={styles.label3}>Quantity</Text>
                            <View style={styles.increaseCartMainAmountView}>
                                <View style={styles.cartAmountView}>
                                    <TouchableOpacity style={styles.increase} onPress={decreaseCart}>
                                        <FIcon name="minus" size={12} color="#9CA3AF" />
                                    </TouchableOpacity>
                                    <View style={styles.increaseText}>
                                        <TextInput
                                            style={styles.label2}
                                            value={cartAmount.toString()}
                                            onChangeText={(val) => {
                                                // if (result.quantity_available >= val) {
                                                val = val.replaceAll(regex, "")
                                                setCartAmount(val.replace(/[^0-9]/g, ''))
                                                // }
                                            }
                                            }
                                            keyboardType="numeric"
                                        />

                                    </View>
                                    <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
                                        <FIcon name="plus" size={12} color="#9CA3AF" />
                                    </TouchableOpacity>
                                </View>
                              
                            </View>
                    </View>
                    <View style={styles.quantityCover}>

                                {/* The date picker */}
                                {isPickerShow && (
                                <DateTimePicker
                                    value={date}
                                    mode={'date'}
                                    display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                                    is24Hour={true}
                                    onChange={onChange}
                                    style={styles.datePicker}
                                />
                            )}
                            <View>
                                <Text style={styles.pickedDate}>{date.toDateString()}</Text>
                            </View>


                            {!isPickerShow && (
                                <TouchableOpacity onPress={showPicker}>
                                    <Fcon name="calendar" size={14} color="#000" style={{ paddingLeft: 5 }} />
                                </TouchableOpacity>
                            )}

                        </View>
                       
                    {errMsg ? <View style={styles.errMainView}>
                        <Text style={styles.failedResponseText}>{errMsg}</Text>
                    </View> :
                        null
                    }

                        <TouchableOpacity style={styles.uploadBtn}>
                            <Acon name="picture" size={50} color="#4B4EFC" />
                            <Text style={styles.uploadCaption}>Upload product image or drag and drop</Text>
                            <Text style={styles.uploadCaptionGray}>PNG, JPG, , GIF Max 5MB</Text>
                        </TouchableOpacity>

                   
                       
                        <View style={styles.btnCover}>
                            <BtnLg title="Add To Stock" onPress={() => props.navigation.navigate('Record')} />
                           
                        </View>
                    
                </View>
               
                   
                    {errMsg ? <View style={styles.errMainView}>
                        <Text style={styles.failedResponseText}>{errMsg}</Text>
                    </View> :
                        null
                    }
                       
                 
    


            </View>
        </SafeAreaView>
    )
};

export default Receipt;