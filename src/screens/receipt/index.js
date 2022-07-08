import React, { useState, useRef, Easing, useEffect, useCallback } from "react";
import {
    View, Text, TextInput, Image, Button,ScrollView, TouchableOpacity, Animated, FlatList, SafeAreaView, animated, Keyboard,
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
import ToggleSwitch from 'toggle-switch-react-native'
import Fcon from 'react-native-vector-icons/Feather';
import { registerSchema } from "@Helper/Schema";

import styles from "./style";
import data from "./data";



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
    const flatListRef = useRef();

   
    const toTop = () => flatListRef.current.scrollToOffset({ animated: true, offset: 0 })



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



    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;

        return (
            <View style={styles.listContainer}>
            <View style={styles.leftList}>
               <Text style={styles.descTopText} numberOfLines={1}>{item.menu}</Text> 
               {/* <Text style={styles.descBottomText} numberOfLines={1}>payment for the wedding gown</Text>  */}
            </View>
            <View style={styles.rightList}>
               <Text style={styles.rightValues}>{item.price}</Text> 
               <Text style={styles.rightValues}>{item.quantity}</Text>
               <Text style={styles.rightValues}>{item.amount}</Text>
            </View>
        </View>
                 
        )
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
            <NavHeaderWhiteTwo title="Receipt" onPress={returnBack} />
            <ScrollView
                indicatorStyle="white"
                contentContainerStyle={styles.scrollStyleZ}
                >
                <View style={styles.topSmTitle}>
                    <Text style={styles.topSmTitleText}>No.<Text style={styles.topSmTitleTextL}> 0000</Text> </Text>
                    <Text style={styles.topSmTitleText}>| Date <Text style={styles.topSmTitleTextL}> 00.00.2022</Text></Text>
                </View>
                <View style={styles.addressCover}>
                        <View style={styles.addressContainer}>
                            <Text style={styles.toText}>From</Text>
                            <Text style={styles.clientNameText}>KashBuk</Text>
                            <Text style={styles.address}> 
                                flat 14, block 4 fct wuse zone 6 fct abuja
                            </Text>
                        </View>
                        <View style={styles.addressContainer}>
                            <Text style={styles.toText}>To</Text>
                            <Text style={styles.clientNameText}>Client Name</Text>
                            <Text style={styles.address}> 
                                suit 11, block 18, Bannex plaza, fct abuja
                            </Text>
                        </View>
                </View>

<View style={styles.descriptionCover}>
    <View style={styles.decriptionContainerL}>
        <Text style={styles.descripTitle}>Description</Text>
    </View>
    <View style={styles.decriptionContainerR}>
    <Text style={styles.descripTitle}>quantity</Text>
        <Text style={styles.descripTitle}>rate</Text>
        <Text style={styles.descripTitle}>amount</Text>
    </View>
</View>

       
            <View style={{padding:10, paddingLeft:-10}}>
            {/* <FlatList
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={ListView}
                  ListFooterComponent={<View style={{ height: 50 }} />}
                  columnWrapperStyle={styles.column}
              /> */}

            {data.map((item) => (
                <View style={styles.listContainer}>
                    <View style={styles.leftList}>
                        <Text style={styles.descTopText}>{item.menu}</Text> 
                    </View>
                    <View style={styles.rightList}>
                    <Text style={styles.rightValues3}>{item.quantity}</Text>
                        <Text style={styles.rightValues1}>{item.price}</Text> 
                        <Text style={styles.rightValues2}>{item.amount}</Text>
                    </View>
                </View>
            ))}


                <View style={styles.totalCover}>
                    <View style={styles.totalTop}>
                        <Text style={styles.totalTitle1}>Sub total </Text>
                        <Text style={styles.totalValue}>00,00</Text>
                    </View>
                    <View style={styles.totalBottom}>
                    <Text style={styles.totalTitle}>WHT 7.5%</Text>
                        <Text style={styles.totalValue}>00,00</Text>
                    </View>
               </View>
               <View style={styles.downTotal}>
                  <View style={styles.totalCap}>
                    <Text style={styles.totalCapText}>Total</Text>
                  </View>
                  <View style={styles.colorTotal}>
                    <Text style={styles.colorCapText}>€00,00</Text>
                  </View>
               </View>

               <View style={styles.paymentCaptionCover}>
                <Text style={styles.paymentCaption}>
                Payment INFO
                </Text>
               </View>
               <View style={styles.addressCover}>
                        <View style={styles.addressContainer}>
                            
                            <Text style={styles.clientNameText}>Account Name </Text>
                            <Text style={styles.address}>kashBuk Tech Solutions</Text>

                            <Text style={styles.clientNameText}>Bank Name</Text>
                            <Text style={styles.address}>Guaranty Trust Bank</Text>
       
                    
                           

                        </View>
                        <View style={styles.addressContainer}>
                            <Text style={styles.address}>Payment Terms Payment within 14 days from invoice receipt without deductions</Text>
                        </View>
                </View>
                <BtnLg title="Send Receipt" style={styles.createBtn1} on styles={styles.btnText} />
                
            </View>

</ScrollView>
 
</View>

</SafeAreaView>
)
};

export default Receipt;