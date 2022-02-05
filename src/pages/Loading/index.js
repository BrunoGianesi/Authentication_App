import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function Loading({ navigation }) {
    
    return(
        <ActivityIndicator />
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 200,  
      flex: 1,
      justifyContent: "center",
      position: 'absolute'
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });