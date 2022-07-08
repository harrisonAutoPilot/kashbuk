import 'react-native-gesture-handler';
import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@Screen/home";
import Login from "@Screen/login";
import Otp from "@Screen/otp";
import SignUp from "@Screen/signup";
import Welcome from "@Screen/welcome";
import CreateNewQuote from '@Screen/createNewQuote';
import CreateQuote from '@Screen/createQuote';
import AddMultiple from '@Screen/addMultiple';
import AddExpenses from '@Screen/addExpense';
import AddMultipleExpenses from '@Screen/addMultipleExpenses';
import AddItem from '@Screen/addItem';
import AddProduct from '@Screen/addProduct';
import CashBook from '@Screen/cashBook';
import Record from '@Screen/record';
import Settings from '@Screen/settings';
import Profile from '@Screen/profile';
import ChangePin from '@Screen/changePin';
import AddBusiness from '@Screen/addBusiness';
import SelectBusiness from '@Screen/selectBusiness';
import Receipt from '@Screen/receipt';
import Quotation from '@Screen/quote';
import UpdateCreditor from '@Screen/updateCreditor';
import UpdateDebtor from '@Screen/updateDebtor';


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
      <Stack.Screen name="Homee"   activetintcolor="red"  component={Home} initialRouteName='Home' independent={true} options={{headerLeft: (props) => null }}  />
   
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
const RecordStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Record" component={Record} options={{ headerLeft: (props) => null }} />
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

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Settings" component={Settings} options={{ headerLeft: (props) => null }} />
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
          <Stack.Screen name="AddExpenses" component={AddExpenses} />
          <Stack.Screen name="AddMultipleExpenses" component={AddMultipleExpenses} />
          <Stack.Screen name="AddItem" component={AddItem} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="CreateNewQuote" component={CreateNewQuote} />
          <Stack.Screen name="CreateQuote" component={CreateQuote} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="ChangePin" component={ChangePin} />
          <Stack.Screen name="AddBusiness" component={AddBusiness} />
          <Stack.Screen name="SelectBusiness" component={SelectBusiness} />
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="Quotation" component={Quotation} />
          <Stack.Screen name="UpdateCreditor" component={UpdateCreditor} />
          <Stack.Screen name="UpdateDebtor" component={UpdateDebtor} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} initialRouteName="Home" />
        </Stack.Navigator>
    );
}


 export { HomeStackNavigator,RecordStackNavigator, SpaceStackNavigator , CashBookStackNavigator,SettingStackNavigator };
// export { HomeStackNavigator};