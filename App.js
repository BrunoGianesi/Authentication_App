import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebase'

import { getItem, storeItem } from './src/utils/AsyncStorage'

import Home from './src/pages/Home';
import CreateAccount from './src/pages/Authentication/CreateAccount';
import AuthPage from './src/pages/Authentication/AuthPage';
import Loading from './src/pages/Loading';
const Stack = createStackNavigator();

export default function App() {
  onAuthStateChanged(auth, function(user) {
    if (user) {
        storeItem('SignIn', 'true');    
    } else {
        storeItem('SignIn', 'false');
    }
  });
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AuthPage" component={AuthPage}/>
        
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="Loading" component={Loading}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}