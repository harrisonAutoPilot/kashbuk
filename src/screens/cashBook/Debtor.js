import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, FlatList, Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import styles from "./style";
import data from './data';
import {useForm, Controller} from 'react-hook-form'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';



const Debtor = ({ props, navigation }) => {
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

      const getDebtor =() =>{
        props.navigation.navigate("UpdateDebtor")
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


    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;
    
        return (
            <TouchableOpacity onPress={getDebtor}>
            <View style={styles.listCover}>
       
          <View style={styles.listLeft}>
                <Text style={styles.nameText}>Good is Good Motor</Text>
                <Text style={styles.purposeText}>For transport fair</Text>
            </View>
            <View style={styles.listRight}>
            <Text style={styles.priceText}>₦ 20,000</Text>
               
            </View>
         
        </View>
        </TouchableOpacity>

        )
    };

 
    return (
     
        <View style={styles.Signincontainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Find Debtor"
        onChangeText={itemName => setItemName(itemName)}
        defaultValue={itemName}
        />
<Image style={styles.searchImg} source={require("@Assets/image/magnifying-glass.png")} />
        <View style={styles.titleCover}>
           <View style={styles.left}>
           <Text style={styles.smTitleText}>Names of Debtors</Text>
           </View>
           <View style={styles.right}>
           <Text style={styles.smTitleText}>Amount owed</Text>
           </View>
        </View>

       <View style={styles.listContainer}>
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
       
        
        </View>
    )
};

export default Debtor;