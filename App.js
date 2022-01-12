import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/pages/Home/Home';
import CreateAccount from './src/pages/Authentication/CreateAccount/CreateAccount';
import AuthPage from './src/pages/Authentication/AuthPage/AuthPage';

const Stack = createStackNavigator();

const getSignIn = async () => {
  try {
      const value = await AsyncStorage.getItem('SignIn');
      return value;
  } 
  catch(e) {
      alert(e)
    // error reading value
  }
}

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AuthPage" component={AuthPage}/>
        
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}