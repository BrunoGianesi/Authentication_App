import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (item) => {
    try {
        const value = await AsyncStorage.getItem(item);
      if(value !== null) {
        return value;
        // value previously stored
      }
    } catch(e) {
        alert(e)
      // error reading value
    }
}

const storeItem = async ( item , value) => {
    try {
      await AsyncStorage.setItem(item, value);
    } catch (e) {
    alert(e)
      // saving error
    }
}

export { getItem, storeItem }