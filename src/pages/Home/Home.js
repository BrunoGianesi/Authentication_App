import { Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, View, Image } from 'react-native';
import { TextInputStyle } from './styles';
import { createStackNavigator } from '@react-navigation/stack';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

export default function Home({ navigation }) {
    return(
        <HideKeyboard>
            <View keyboardShouldPersistTaps='handled'>
                <View style={TextInputStyle.container}>
                    <Text style={{justifyContent: 'center', alignContent: 'center'}}>Você entrou no App!!</Text>
                </View>
            </View>
        </HideKeyboard>
        
        
    );
}