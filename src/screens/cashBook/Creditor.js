import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, FlatList,  Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import styles from "./style";
import data from './data';




const Creditor = ({ props, navigation }) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);
    const [itemName, setItemName] = useState("");
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [showUsername, setShowUsername] = useState(false);
    const { navigate } = props.navigation; 

  
    const getCreditor =() =>{
        props.navigation.navigate("UpdateCreditor")
       }
      
   
   
    const [activeId, setActiveId] = useState(1);
    const goBack = () => props.navigation.navigate("Home");


    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;
    
        return (
            <TouchableOpacity onPress={getCreditor}>
            <View style={styles.listCover}>
            <View style={styles.listLeft}>
                <Text style={styles.nameText}>Good is Good Motor</Text>
                <Text style={styles.purposeText}>For transport fair</Text>
            </View>
            <View style={styles.listRight}>
            <Text style={styles.priceTextC}>₦ 20,000</Text>
               
            </View>
        </View>
        </TouchableOpacity>
        )
    };
 
    return (
        <View style={styles.Signincontainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Find Creditor"
        onChangeText={itemName => setItemName(itemName)}
        defaultValue={itemName}
        />
        <Image style={styles.searchImg} source={require("@Assets/image/magnifying-glass.png")} />
                <View style={styles.titleCover}>
                   <View style={styles.left}>
                   <Text style={styles.smTitleText}>Names of Creditors</Text>
                   </View>
                   <View style={styles.right}>
                   <Text style={styles.smTitleText}>Amount you owe</Text>
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

export default Creditor;