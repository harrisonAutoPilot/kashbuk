import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, FlatList, Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import { Header, NavHeaderWhite, BtnLg} from "@Component";
import styles from "./style";
import data from './data';
import {useForm, Controller} from 'react-hook-form'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';



const Inventory = ({ props, navigation }) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);
    const [itemName, setItemName] = useState("");
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [showUsername, setShowUsername] = useState(false);
    const [availability, setAvailability] = useState("low stock");
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


    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;
    
        return (
            <View style={styles.listCover}>
                <View style={styles.listLeft}>
                    <View style={styles.bagCover}>
                       <Image style={styles.productImg} source={require("@Assets/image/bag.jpg")} />  
                    </View>
                    <View>
                       
                     {
                        item.availability === "out of stock" ?
                        <View>
                             <Text style={styles.nameText}>{item.product}</Text>
                            <View style={styles.outCover}>
                            <Text style={styles.outText}>out of stock</Text>
                            </View>
                     </View>
                        :
                        item.availability === "low stock" ?
                        <View>
                           <Text style={styles.nameText}>{item.product}</Text>
                            <View style={styles.lowCover}>
                            <Text style={styles.lowText}>out of stock</Text>
                            </View>
                        </View>
                      :
                      <View style={styles.availabilityCover}>
                             <Text style={styles.nameText}>{item.product}</Text>
                      </View>
                     }
                    </View>
                </View>
            <View style={styles.countCover}>
                <Text style={styles.countText}>{item.count}</Text>
               
            </View>
        </View>

        )
    };

 
    return (
     
        <View style={styles.Signincontainer}>
        <TextInput
        style={styles.textInput}
        placeholder="Find Products"
        onChangeText={itemName => setItemName(itemName)}
        defaultValue={itemName}
        />
        <View style={styles.titleCover}>
        <View style={styles.lefT}>
                <Text style={styles.totalTitle}>Total Products</Text>
            </View>
            <View style={styles.righT}>
             <View style={styles.totalCountCover}>
             <Text style={styles.totalCountText}>200</Text>
             </View>
                <TouchableOpacity style={styles.viewAllCover}>
                    <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
            </View>
        </View>
        < BtnLg title="Add New Product" style={styles.addBtn} onPress={() => props.navigation.navigate('AddProduct')} />
<Image style={styles.searchImg} source={require("@Assets/image/magnifying-glass.png")} />
        <View style={styles.titleCover}>
           <View style={styles.left}>
           <Text style={styles.smTitleTextColor}>Product List</Text>
           </View>
           <View style={styles.right}>
           <Text style={styles.smTitleText}>Count</Text>
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

export default Inventory;