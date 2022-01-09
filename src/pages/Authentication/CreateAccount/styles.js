import { StyleSheet } from 'react-native';

const Logo = StyleSheet.create({
    container: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 30,
    },
});

const BackButton = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 50,
    },
    container: {
        paddingLeft: 10,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        paddingLeft: 20,
        fontSize: 20
    }
})

const TextInputStyle = StyleSheet.create({
    container: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 42,
        backgroundColor: '#F4F3F3',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 8,
        width: '90%',
        marginBottom: 20,
    }

})

const LoginButton = StyleSheet.create({
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 42,
        backgroundColor: '#3b5998',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 8,
        width: '35%',
        marginBottom: 30,
    },
    text: {
        color: '#F0F0F0',
        fontWeight: 'bold'
    }
})

const Divider = StyleSheet.create({
    line: {
        flex: 1, 
        height: 1, 
        backgroundColor: '#9E9E9E'
    },
    text: {
        width: 150,
        color: '#9E9E9E',
        textAlign: 'center'
    }
})

const GoogleLogin = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        backgroundColor: '#d0021b',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingLeft: 8,
        width: '70%',
        marginBottom: 20,
    },
    text: {

        color: '#F0F0F0',
        fontWeight: 'bold',
        paddingLeft: 80,
    },
    logo: {
        color: '#F0F0F0'
    }
})

const FacebookLogin = StyleSheet.create({
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        backgroundColor: '#3b5998',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingLeft: 8,
        width: '70%',
    },
    text: {

        color: '#F0F0F0',
        fontWeight: 'bold',
        paddingLeft: 80,
    },
    logo: {
        color: '#F0F0F0'
    }
})

export { TextInputStyle, LoginButton, BackButton, Logo, Divider, FacebookLogin, GoogleLogin }