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
import Fcon from 'react-native-vector-icons/Feather';
import { registerSchema } from "@Helper/Schema";

import styles from "./style";
import data from "./data";
import payment from "./payment";


const CreateQuote = (props) => {
    const [errMsg, setErrMsg] = useState("");
    const result = props.result;
    const [active, setActive] = useState(1);
    const [err, setErr] = useState("");
    const [viewAll, setViewAll] = useState(true);
    const [category, setCategory] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [cartAmount, setCartAmount] = useState(1);
    const [newValue, setnewValue] = useState(1);
    const [adding, setAdding] = useState(false);
    const [childData, setChildData] = useState("");
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);




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
     

  
    const passData = (childData) => {
        setChildData(childData);
       
      };

    // this is to return back to the Home Screen
    const returnBack = () => {
        props.navigation.navigate('TabNavigator')
    }

    // const { status, errors } = useSelector((state) => state.auth);
    const dismissKeyboard = () => Keyboard.dismiss();

    const handleChange = (event = {}) => {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;

        setItemName([name], value);
    }

    const increaseCart = () => {
        // setErr("")
        // if (result.quantity_available > cartAmount) return 
        setCartAmount(cartAmount + 1)
    };

  const addItemBtn = () => {
        props.navigation.navigate('AddItem')
        }

    const decreaseCart = () => {
        // setErr("")
        if (cartAmount > 1) return setCartAmount(cartAmount - 1);
    };
    const regex = new RegExp("^0+(?!$)", 'g');

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
                        <Text style={styles.itemDetails}>{item.id == "1" ? ` Balance: ???${wallet.balance ? commafy(wallet.balance) : 0}`
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
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent={true} />  
            <View style={styles.container}>
                <NavHeaderWhite onPress={returnBack} />
                <View style={styles.topSmTitle}>
                    <Text style={styles.topSmTitleText}>Add Multiple Quote Items</Text>
                </View>


                <View style={styles.recordsContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={ListView}
                        ListFooterComponent={<View style={{ height: 50 }} />}
                        columnWrapperStyle={styles.column}
                    />
                </View>
                <View style={styles.bottomCover}>
                    <View style={styles.topCover}>
                      <Text style={styles.addText}>Add item</Text>
                    </View>
                    <View>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Item name"
                            onChangeText={itemName => setItemName(itemName)}
                            defaultValue={itemName}
                            
                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder="0.00"
                            keyboardType="number-pad"
                            onChangeText={itemAmount => setItemAmount(itemAmount)}
                            defaultValue={itemAmount}
                        />
                    </View>

                    <View style={styles.dateContainer}>
                        <View style={styles.date1}>
                            <Text style={styles.label3}>Quantity</Text>
                            <View style={styles.increaseCartMainAmountView}>
                                <View style={styles.cartAmountView}>
                                    <TouchableOpacity style={styles.increase} onPress={decreaseCart}>
                                        <FIcon name="minus" size={12} color="#9CA3AF" />
                                    </TouchableOpacity>
                                    <View style={styles.increaseText}>
                                        <Text  style={styles.label2}>{cartAmount.toString()}</Text>
                                        {/* <TextInput
                                            style={styles.label2}
                                            value=
                                            onChangeText={(val) => {
                                                 // if (result.quantity_available >= val) {
                                                    val = val.replaceAll(regex, "")
                                                    setCartAmount(val.replace(/[^0-9]/g, ''))
                                                // }
                                            }
                                            }
                                            keyboardType="numeric"
                                        /> */}

                                    </View>
                                    <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
                                        <FIcon name="plus" size={12} color="#9CA3AF" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "57%" }}>
                                    {/* <Text style={styles.amountText}>&#8358;{commafy(cartAmount)}</Text> */}
                                </View>
                            </View>
                        </View>
                        <View style={styles.date1}>
                            {/* The date picker */}
                           
                            <DatePicker
                                    isVisible={isDateTimePickerVisible}
                                    onConfirm={handleDatePicked}
                                    onCancel={hideDateTimePicker}
                                />
                         
                            <View>
                                <Text style={styles.pickedDate}>{date.toDateString()}</Text>
                            </View>

                              <TouchableOpacity onPress={showDateTimePicker}>
                              <Fcon name="calendar" size={14} color="#000" style={{ paddingLeft: 5 }} />
                             </TouchableOpacity>
                          
                        </View>
                    </View>
                   


                    {errMsg ? <View style={styles.errMainView}>
                        <Text style={styles.failedResponseText}>{errMsg}</Text>
                    </View> :
                        null
                    }

                    <View style={styles.selectContainer}>

                        <FlatList
                            data={payment}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                    <View style={styles.btnCover}>
                   
                            <BtnLg title="Add Item" style={styles.createBtn} styles={styles.btnText} />
                       
                        <BtnLg title="Create Quote" onPress={() => props.navigation.navigate('Quotation')} />
                    </View>
                </View>


            </View>
        </SafeAreaView>
    )
};

export default CreateQuote;