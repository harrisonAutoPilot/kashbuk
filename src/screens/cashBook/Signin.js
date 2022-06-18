import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, ScrollView, Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import styles from "./style";
import {useForm, Controller} from 'react-hook-form'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';



const Signin = ({ props, navigation }) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);
    const [itemName, setItemName] = useState("");
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [showUsername, setShowUsername] = useState(false);
    const { navigate } = props.navigation; 

   

        const submit = () => {
          
      if (password === "admin"){
        props.navigation.navigate('TabNavigator')
      }else
     
      setShowRetrieve(true)
      
      // alert("Sorry wrong credential Please contact admin : 08062585929")
        
       
       }
      

       const showUser = () => { 
        setHideUsername(false)
        setShowUsername(true)
       
        
        // alert("Sorry wrong credential Please contact admin : 08062585929")
          
         
         }
         const hideUser = () => { 
          setShowUsername(false)
          setHideUsername(true)
          
          // alert("Sorry wrong credential Please contact admin : 08062585929")
            
           
           }
   
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
        placeholder="Find Debtor"
        onChangeText={itemName => setItemName(itemName)}
        defaultValue={itemName}
        />
        </View>
    )
};

export default Signin;