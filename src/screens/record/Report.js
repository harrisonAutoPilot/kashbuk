import React, {useState, useRef} from 'react';
import {
  View,Text, Image, StatusBar, FlatList,  Dimensions,TouchableOpacity,TextInput,Keyboard,TextInputField 
} from 'react-native';
import { BtnLg } from "@Component";
import  Icon  from "react-native-vector-icons/AntDesign";
import styles from "./style";
import data from './data';




const Report = ({ props, navigation }) => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);
    const [status, setStatus] = useState(false);
    const [itemName, setItemName] = useState("");
    const [showRetrieve, setShowRetrieve] = useState(false);
    const [showUsername, setShowUsername] = useState(false);
    const { navigate } = props.navigation; 

  
   
   
   
    const [activeId, setActiveId] = useState(1);
    const goBack = () => props.navigation.navigate("Home");


    const dismissKeyboard = () => Keyboard.dismiss();
    const showPin = () => setPinVisibility(!pinVisibility)

    const ListView = (props) => {
        const item = props.item;
        const redirectToNavigationDetail = props.navigation;
    
        return (
            <View style={styles.reportListCover}>
            <View style={styles.listdate}>
                <Text style={styles.nameText}>05 may 2022</Text>
            </View>
            <View style={styles.listdate}>
                <Text style={styles.nameTextIN}>15,000</Text>
            </View>
            <View style={styles.listdate}>
                <Text style={styles.nameTextOUT}>2,900</Text>
            </View>
            <View style={styles.listdate}>
                <Text style={styles.nameTextBALANCE}>12,100</Text>
            </View>
            <View style={styles.listdate}>
               <TouchableOpacity>
               <Icon name="right" size={18} color="#000"  />
               </TouchableOpacity>
            </View>
        </View>

        )
    };
 
    return (
        <View style={styles.Signincontainer}>
            <View style={styles.dateTitle}>
            <Text style={styles.dateSelectText}>Select your period</Text>
            </View>
        <TextInput
        style={styles.textInput}
        placeholder="06/24/2021 - 05/30/2022"
        onChangeText={itemName => setItemName(itemName)}
        defaultValue={itemName}
        />
        <Image style={styles.calendarImg} source={require("@Assets/image/calendar.png")} />

         {/* THIS IS WHERE THE MINI DASHBOARD START */}
        <View style={styles.miniDashboard}>
            <View style={styles.blueCover}>
                <Text style={styles.blueTextBig}>Total IN</Text>
                <Text style={styles.blueText}>₦20,455</Text>
            </View>

            <View style={styles.oneLine}/>

            <View style={styles.redCover}>
                <Text style={styles.redTextBig}>Total OUT</Text>
                <Text style={styles.redText}>₦5,055</Text>
            </View>
            <View>
            <View style={styles.twoLine}/>
            <View style={styles.twoLine}/>
            </View>
            <View style={styles.grayCover}>
                <Text style={styles.grayTextBig}>Total  Balance</Text>
                <Text style={styles.grayText}>₦15,400</Text>
            </View>
        </View>

        {/* THIS IS WHERE THE MINI DASHBOARD END */}

{/* THIS IS WHERE THE  DOWNLOAD BUTTON START*/}
                 <View style={styles.btnCover}>
                        <BtnLg title="Download Report" style={styles.createBtn1}  styles={styles.btnText} />
                    </View>
{/* THIS IS WHERE THE  DOWNLOAD BUTTON END*/}
                <View style={styles.titleCover1}>
                   <View style={styles.mid}>
                   <Text style={styles.smTitleText1}>DATE</Text>
                   </View>

                   <View style={styles.mid}>
                   <Text style={styles.smTitleText1}>IN ₦ </Text>
                   </View>

                   <View style={styles.mid}>
                   <Text style={styles.smTitleText2}> OUT ₦ </Text>
                   </View>

                   <View style={styles.mid}>
                   <Text style={styles.smTitleText3}>BALANCE ₦</Text>
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

export default Report;