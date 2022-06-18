import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, ScrollView, Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import styles from "./style";




const Signup = ({ props, navigation }) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);
    const [itemName, setItemName] = useState("");
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [showUsername, setShowUsername] = useState(false);
    const { navigate } = props.navigation; 

  
    //     const submit = () => {
    //      props.navigation.navigate('TabNavigator', { screen: 'Home' })
    //    }
   
   
    const [activeId, setActiveId] = useState(1);
    const goBack = () => props.navigation.navigate("Home");


    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

    const getRandomColor = (id) => {
        let ids = parseInt(id)
        let shade;
        if (ids % 2 === 0) {
            shade = "rgb(0, 0, " + (Math.floor(Math.random() * 255)) + ")";
        } else {
            shade = `rgb(255, ${(Math.floor(Math.random() * 150))}, 0)`;
        }
        return shade
    }
 
    return (
        <View style={styles.Signincontainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Find Creditor"
        onChangeText={itemName => setItemName(itemName)}
        defaultValue={itemName}
        />
        </View>
    )
};

export default Signup;