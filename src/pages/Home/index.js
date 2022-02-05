import { Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, View, Image, StatusBar } from 'react-native';
import { TextInputStyle } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from '../../../firebase';
import { useEffect, useState } from 'react';
import { getItem, storeItem } from '../../utils/AsyncStorage'
import Loading from '../Loading';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );


export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            console.log('User signed out!');
            storeItem('SignIn', 'false');
            navigation.navigate('AuthPage');
        })
    }
    const [isSignedIn, setIsSignedIn] = useState('true');
    
    getItem('SignIn').then((teste)=>{
        setIsSignedIn(teste);
        if ( isSignedIn === 'false') {
            navigation.navigate("AuthPage")
        }
    });
    useEffect(() => {
        setLoading(false);
    }, [isSignedIn]);
    
    console.log(isLoading);
    return(
        <HideKeyboard>
            <View keyboardShouldPersistTaps='handled' style={{backgroundColor: 'white', height: '100%'}}>
                <StatusBar hidden={false} translucent={true} backgroundColor={'white'} barStyle={'dark-content'}/>
                {isLoading == true ? 
                <Loading/> 
                :
                <View style={TextInputStyle.container}>
                    <TouchableOpacity onPress={handleSignOut}>
                        <Text>
                            Deslogar
                        </Text>
                    </TouchableOpacity>
                    <Text style={{justifyContent: 'center', alignContent: 'center'}}>Você entrou no App!!</Text>
                </View>
            }
            </View> 
        </HideKeyboard>
    );
}