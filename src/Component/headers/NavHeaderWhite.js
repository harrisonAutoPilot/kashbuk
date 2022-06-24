import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import styles from "./style";


const NavHeaderWhite = (props) => {
	return (
		<View style={styles.navCoverWhite}>
			<StatusBar barStyle="dark-content" backgroundColor={"#fff"} hidden={false} />
			<SafeAreaView >
			<View style={ styles.mainHeader}>
				<TouchableOpacity onPress={props.onPress} >
				<Icon name="left" size={24} color="#000"  />
					
				</TouchableOpacity>
				<View style={styles.logoCover}>
				<Image source={require("@Assets/image/WordMark.png")} style={styles.logoImg} />
				</View>
				</View>
			</SafeAreaView>
		</View>
	)
};

export default NavHeaderWhite