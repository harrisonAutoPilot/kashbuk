import 'react-native-gesture-handler';
import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@Screen/home";
import Login from "@Screen/login";
import Otp from "@Screen/otp";
import SignUp from "@Screen/signup";
import Welcome from "@Screen/welcome";
import CreateQuote from '@Screen/createQuote';
import AddMultiple from '@Screen/addMultiple';
import AddItem from '@Screen/addItem';
import CashBook from '@Screen/cashBook';
// import Profile from "../screens/Profile";
// import Onboarding from "../screens/Onboarding";
// import Login from "../screens/Login";
// import Signin from "../screens/Login/Signin";
// import Signup from "../screens/Login/Signup";
// import Favourite from '../screens/Login/Favourite';

import BottomTabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "transparent",
  },

  headerTintColor: "transparent",
  headerBackTitle: "Back",
  tabBarStyle: { position: 'absolute', borderStyle:'solid', borderColor:'red', borderWidth:1 },
  tabBarOptions: { showLabel: true ,   activetintcolor:"red"}
}


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} independent={true}
    screenOptions={{
      headerShown: false
    }} 
    >
      <Stack.Screen name="Homee"   activetintcolor="red"  component={Home} initialRouteName='Settings' independent={true} options={{headerLeft: (props) => null }}  />
      {/* <Stack.Screen name="Space" component={Space} /> */}
    </Stack.Navigator>
  );
}

const CashBookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CashBook" component={CashBook} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}
const BrowseStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Browsee" component={Home} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}
const SpaceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Spacet" component={Home} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profilee" component={Home} options={{ headerLeft: (props) => null }} />
    </Stack.Navigator>
  );
}
export default MainStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="Splash" component={Splash} /> */}
          <Stack.Screen name="Onboarding" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AddMultiple" component={AddMultiple} />
          <Stack.Screen name="AddItem" component={AddItem} />
          <Stack.Screen name="CreateQuote" component={CreateQuote} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} initialRouteName="Home" />
        </Stack.Navigator>
    );
}


 export { HomeStackNavigator,BrowseStackNavigator, SpaceStackNavigator , CashBookStackNavigator,ProfileStackNavigator };
// export { HomeStackNavigator};