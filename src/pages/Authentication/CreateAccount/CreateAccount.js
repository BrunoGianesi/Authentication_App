import { Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, View, Image } from 'react-native';
import { TextInputStyle, LoginButton, BackButton, Logo, Divider, FacebookLogin, GoogleLogin } from './styles'
import Ionic from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import { auth } from '../../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

export default function CreateAccount({ navigation }) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    global.isSignedIn = isSignedIn
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true)
            if (isSignedIn) {
                navigation.navigate('Home')
            }  
        })
    }
    
  return (
    <HideKeyboard>
        <View>
            <View style= {BackButton.header}>
                <TouchableOpacity style={BackButton.container} onPress={ () => navigation.navigate('AuthPage')}>
                    <Ionic name="arrow-back-outline" size={30}/>
                </TouchableOpacity>
                <Text style={BackButton.text}>
                    Criar Conta
                </Text>
            </View>
            <View style={Logo.container}>
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
                placeholder='Nome'
                />
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
                <TextInput
                style={TextInputStyle.textInput}
                placeholder='Confirmar senha'
                secureTextEntry={true}
                />
                <TouchableOpacity
                style={LoginButton.loginButton}
                onPress={handleSignUp}
                >
                    <Text style={LoginButton.text}>
                        Criar Conta
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={Divider.line} />
                    <View>
                        <Text style={Divider.text}>Ou cadastre-se com:</Text>
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
        </View>
        
    </HideKeyboard>
  );
}