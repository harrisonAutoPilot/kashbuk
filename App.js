/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Welcome from '@Screen/welcome';
import Login from '@Screen/login';
import SignUp from '@Screen/signup';
import Otp from '@Screen/otp';
import Home from '@Screen/home';

import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "@Navigation/StackNavigator";



const App  = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   
  
    <NavigationContainer>
        <StatusBar backgroundColor="red" hidden animated  />
      <MainStackNavigator />
    </NavigationContainer>
   
  );
};



export default App;
