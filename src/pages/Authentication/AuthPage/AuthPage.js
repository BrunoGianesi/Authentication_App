import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';;
import { Logo, TextInputStyle, LoginButton, GoogleLogin, Divider, NewAccount } from './styles';
import Ionic from 'react-native-vector-icons/Ionicons';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from "firebase/auth"
import { auth } from '../../../../firebase';
import { useEffect, useState } from 'react';
import { getItem, storeItem } from '../../../utils/AsyncStorage'
import * as Google from 'expo-google-app-auth';



const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

export default function AuthPage({ navigation }) {
    const [isSignedIn, setIsSignedIn] = useState('false');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    getItem('SignIn').then((teste)=>{
        setIsSignedIn(teste);
    });
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((re) => {
            setIsSignedIn('true');
            storeItem('SignIn', 'true');
        });
    };
    useEffect(() => {
        if ( isSignedIn === 'true') {
            navigation.navigate("Home")
        }
    }, [isSignedIn]);

    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
            androidClientId: '792117341968-0k726d33egg0rnndv9s24ue1av97mff4.apps.googleusercontent.com',
            //   iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                const { idToken, accessToken } = result;
                const credential = GoogleAuthProvider.credential(
                    idToken,
                    accessToken
                );

                signInWithCredential(auth, credential);
                setIsSignedIn('true');
                storeItem('SignIn', 'true');
                return 
            } 
            else {
            return { cancelled: true };
            }
        }
        catch (e) {
            console.log(e)
            return { error: true };
        }
    }
    return (
        <HideKeyboard>
            <View keyboardShouldPersistTaps='handled' style={{backgroundColor: 'white', height: '100%'}}>
                <StatusBar style="auto" />
                <View
                style={Logo.container}
                >
                    <Image
                    style={Logo.image}
                        source={
                        require('./assets/image-removebg-preview.png')
                        }
                        />
                </View>
                <View
                style={TextInputStyle.container}
                >
                    <TextInput
                    style={TextInputStyle.textInput}
                    placeholder='Email'
                    onChangeText={text => SetEmail(text)}
                    />
                    <TextInput
                    style={TextInputStyle.textInput}
                    placeholder='Senha'
                    onChangeText={text => SetPassword(text)}
                    secureTextEntry={true}
                    />
                    <TouchableOpacity
                    style={LoginButton.loginButton}
                    >
                        <Text style={LoginButton.text} onPress={handleSignIn}>
                            Acessar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={Divider.line} />
                        <View>
                            <Text style={Divider.text}></Text>
                        </View>
                    <View style={Divider.line} />
                </View>
                <View style={GoogleLogin.container}>
                    <TouchableOpacity style={GoogleLogin.loginButton} onPress={signInWithGoogleAsync}>
                        <Ionic name="logo-google" size={25} style={GoogleLogin.logo}/>
                        <Text style={GoogleLogin.text}>
                            Google
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={NewAccount.container}>
                        <Text style={NewAccount.text}>
                            Não possui uma conta? 
                        </Text>
                    <TouchableOpacity style={NewAccount.button} onPress={ () => navigation.navigate('CreateAccount')}>
                        <Text style={NewAccount.buttonText}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </HideKeyboard>    
    );
};
