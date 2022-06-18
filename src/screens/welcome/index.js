import React from "react";
import { View, Image,Text, StatusBar } from "react-native";
import styles from "./style";
import {BtnLg } from "@Component/index";
const Welcome = (props) => {
 
    return (
        <View style={styles.container}>
           <StatusBar backgroundColor="red" hidden translucent={false} />
            <View style={styles.top}>
               <Image style={styles.logoImg} source={require("@Assets/image/KImage.png")} />
            </View>
           <View style={styles.Fcover}>
               <Image style={styles.FlogoImg} source={require("@Assets/image/WordMark.png")} />
            </View>
           
          <View style={styles.midTextCover}>
              <Text style={styles.midText}>
              Experience an <Text style={{color:'gold', fontWeight:'500', textDecorationLine:'underline'}}> easier way</Text> to record transactions!
              </Text>
          </View>

         <View style={styles.btnCover}>
         <BtnLg title="Get Started" onPress={() => props.navigation.navigate('Login')} />
         </View>
        </View>
    )
};

export default Welcome;