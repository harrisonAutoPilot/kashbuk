import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import styles from "./style";


const NavHeaderWhiteTwo = (props) => {
	return (
		<View style={styles.navCoverWhite}>
			<StatusBar barStyle="dark-content" backgroundColor={"#fff"} hidden={false} />
			<SafeAreaView >
			<View style={ styles.mainHeader}>
				<TouchableOpacity onPress={props.onPress} >
				<Icon name="left" size={24} color="#000"  />
					
				</TouchableOpacity>
				<View style={styles.textCover}>
				<Text  style={styles.btnTextWhiteTwo}>{props.title}</Text>
				</View>
				</View>
			</SafeAreaView>
		</View>
	)
};

export default NavHeaderWhiteTwo