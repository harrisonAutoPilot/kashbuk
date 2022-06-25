import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styles from "./style";
import  Icon  from "react-native-vector-icons/AntDesign";

const NavHeader = (props) => {
	return (
		<View style={props.styleView === undefined ? styles.navCover : props.styleView}>
			<StatusBar barStyle="light-content" backgroundColor={props.statusBar === undefined ?'#00319D': props.statusBar} hidden={false} />
			<SafeAreaView >
		
			
				<View style={[styles.titleCover1, props.titleCover]}>
					<Text style={props.styles === undefined ? styles.btnText1 : props.styles} numberOfLines={2}>{props.title}</Text>
				</View>
				
				{props.children}
			
			
			
			</SafeAreaView>
		</View>
	)
};

export default NavHeader