import { Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, View, Image, StatusBar } from 'react-native';
import { TextInputStyle } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../../../firebase';
import { useEffect, useState } from 'react';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

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

const storeSignIn = async (value) => {
    try {
      await AsyncStorage.setItem('SignIn', value)
    } catch (e) {
    alert(e)
      // saving error
    }
}

export default function Home({ navigation }) {
    
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            console.log('User signed out!');
            storeSignIn('false');
            navigation.navigate('AuthPage');
        })
    }
    const [isSignedIn, setIsSignedIn] = useState('true');
    getSignIn().then((teste)=>{
        setIsSignedIn(teste);
    });
    useEffect(() => {
        if ( isSignedIn === 'false') {
            navigation.navigate("AuthPage")
        }
    }, [isSignedIn]);
    
    // if ( isSignedIn === 'false') {
    //     navigation.navigate("Home")
    // }
    return(
        <HideKeyboard>
            
            <View keyboardShouldPersistTaps='handled' style={{backgroundColor: 'white', height: '100%'}}>
                <StatusBar hidden={false} translucent={true} backgroundColor={'white'} barStyle={'dark-content'}/>
                <View style={TextInputStyle.container}>
                    <TouchableOpacity onPress={handleSignOut}>
                        <Text>
                            Deslogar
                        </Text>
                    </TouchableOpacity>
                    <Text style={{justifyContent: 'center', alignContent: 'center'}}>Você entrou no App!!</Text>
                </View>
            </View>
        </HideKeyboard>
    );
}