import React, { useState, useRef, Easing, useEffect, useCallback } from "react";
import {
    View, Text, TextInput, Image, Button, TouchableOpacity, Animated, FlatList, SafeAreaView, animated, Keyboard,
    StatusBar,
} from "react-native";
import { Header, NavHeaderWhite, BtnLg, GeneralStatusBarColor } from "@Component";
import DatePicker from "react-native-modal-datetime-picker";
import Toast from 'react-native-toast-message';
import commafy from "@Helper/Commafy";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import PaymentLevel from "./selectLevel";
import ToggleSwitch from 'toggle-switch-react-native'
import Fcon from 'react-native-vector-icons/Feather';
import { registerSchema } from "@Helper/Schema";

import styles from "./style";
import data from "./data";
import payment from "./payment";


const UpdateCreditor= (props) => {
    const [errMsg, setErrMsg] = useState("");
    const result = props.result;
    const [active, setActive] = useState(1);
    const [err, setErr] = useState("");
    const [viewAll, setViewAll] = useState(true);
    const [isOnBlueToggleSwitch, SetIsOnBlueToggleSwitch] = useState(true)
    const [category, setCategory] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [reminderNote, setReminderNote] = useState("");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [showReminderNote, setShowReminderNote] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [dateRem, setDateRem] = useState(new Date(Date.now()));
    const [cartAmount, setCartAmount] = useState(1);
    const [newValue, setnewValue] = useState(1);
    const [adding, setAdding] = useState(false);
    const [childData, setChildData] = useState("");
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
    const [isDateTimePickerVisibleRem, setIsDateTimePickerVisibleRem] = useState(false);


        // this is for the date
        const showDateTimePicker = () => {
            setIsDateTimePickerVisible(true)
            };
        const hideDateTimePicker = () => {
            setIsDateTimePickerVisible(false)
            };
            
            const  handleDatePicked = date => {
                console.log("A date has been picked: ", date);
                setDate(date)
                hideDateTimePicker();
            };
     
  
             // this is for the Reminder
        const showDateTimePickerRem = () => {
            setIsDateTimePickerVisibleRem(true)
            };
        const hideDateTimePickerRem = () => {
            setIsDateTimePickerVisibleRem(false)
            };
            
            const  handleDatePickedRem = dateRem => {
                console.log("A date has been picked: ", dateRem);
                setDateRem(dateRem)
                hideDateTimePickerRem();
                setShowReminderNote(true)
            };

    const passData = (childData) => {
        setChildData(childData);
       
      };

 
    // this is to return back to the Home Screen
    const returnBack = () => {
        props.navigation.navigate('Homee')
    }

    const addMultiple = () => {
        props.navigation.navigate('AddMultiple')
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
                <NavHeaderWhite onPress={returnBack} />
        
                    <View style={styles.bottomCover}>
                   
                  
                        <View>

                            <View style={styles.labelCover}>
                                <Text style={styles.labelText}>Name Of Creditor</Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="GIG"
                                onChangeText={itemName => setItemName(itemName)}
                                defaultValue={itemName}
                            />
                            <View style={styles.labelCover}>
                                <Text style={styles.labelText}>Amount You Owed</Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="150,000"
                                keyboardType="number-pad"
                                onChangeText={itemAmount => setItemAmount(itemAmount)}
                                defaultValue={itemAmount}
                            />

                            <View style={styles.labelCover}>
                                <Text style={styles.labelText}>Due Date</Text>
                            </View>
                            

                            <View style={styles.textInput}>
                            {/* The date picker */}
                         
                                <DatePicker
                                    isVisible={isDateTimePickerVisible}
                                    onConfirm={handleDatePicked}
                                    onCancel={hideDateTimePicker}
                                />
                                <TouchableOpacity style={styles.calendarIconStyle} onPress={showDateTimePicker}>
                                 <Fcon name="calendar" size={20} color="#000000" />
                               </TouchableOpacity>
                         
                                <View>
                                    <Text style={styles.pickedDate}>{date.toDateString()}</Text>
                                </View>

                        
                            
                             
                    
                        
                        </View>


                          
                            <View style={styles.reminderCover}>
                            <View style={styles.dateCover}>

                                {/* This is for the reminder */}
                              <DatePicker
                                    isVisible={isDateTimePickerVisibleRem}
                                    onConfirm={handleDatePickedRem}
                                    onCancel={hideDateTimePickerRem}
                                  
                                />
                               <View style={{marginLeft:30}}>
                                    <Text style={styles.pickedDate}>{dateRem.toDateString()}</Text>
                                </View>
                        
                            </View>
                                <Fcon name="bell" size={20} color="#000000" style={styles.bellStyle}/>
                              <TouchableOpacity onPress={showDateTimePickerRem}>
                              <View style={styles.plusIconCover}>
                                <Fcon name="plus" size={28} color="#0F8D8F" />
                                </View>
                              </TouchableOpacity>
                            </View> 
                            {
                                showReminderNote ?
                                <View style={{marginTop:-20}}>

                                    <View style={styles.labelCover}>
                                        <Text style={styles.labelText}>Reminder Note</Text>
                                    </View>
                                    <TextInput
                                        style={styles.textInputM}
                                        placeholder="Enter your reminder note"
                                        // keyboardType="number-pad"
                                        onChangeText={reminderNote => setReminderNote(reminderNote)}
                                        defaultValue={reminderNote}
                                    />
                               
                                </View>
                                :
                                null
                            }
                             
                        </View>
                       






                    {errMsg ? <View style={styles.errMainView}>
                        <Text style={styles.failedResponseText}>{errMsg}</Text>
                    </View> :
                        null
                    }

                    <View style={{ marginTop: 0 }}>
                       
                        <View style={styles.btnCover}>
                            <BtnLg title="Done" style={styles.submit} onPress={() => props.navigation.navigate("Homee")} />
                            
                        </View>
                    </View>
             

                </View>
           

            </View>
        </SafeAreaView>
    )
};

export default UpdateCreditor;