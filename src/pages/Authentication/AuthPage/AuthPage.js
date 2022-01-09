import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native';
import { Logo, TextInputStyle, LoginButton, GoogleLogin, FacebookLogin, Divider, NewAccount } from './styles'
import Ionic from 'react-native-vector-icons/Ionicons'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../../../firebase';
import { useState } from 'react';


const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );


export default function AuthPage({ navigation }) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    console.log(isSignedIn);
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true);
        });
        console.log(isSignedIn);
        navigation.navigate('Home')
        if (isSignedIn === true) {
            navigation.navigate('Home')
        }
    }
    return (
        <HideKeyboard>
            <View keyboardShouldPersistTaps='handled'>
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
                    <TouchableOpacity style={GoogleLogin.loginButton}>
                        <Ionic name="logo-google" size={25} style={GoogleLogin.logo}/>
                        <Text style={GoogleLogin.text}>
                            Google
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={FacebookLogin.loginButton}>
                        <Ionic name="logo-facebook" size={25} style={GoogleLogin.logo}/>
                        <Text style={FacebookLogin.text}>
                            Facebook
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
