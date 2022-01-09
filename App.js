import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Home';
import CreateAccount from './src/pages/Authentication/CreateAccount/CreateAccount';
import AuthPage from './src/pages/Authentication/AuthPage/AuthPage';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="AuthPage" component={AuthPage}/>
          <Stack.Screen name="CreateAccount" component={CreateAccount}/>
          <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}