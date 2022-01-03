import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key,value) => {
    try {
        const jsonValue = JSON.stringify(value, null, 2)
        await AsyncStorage.setItem(key, jsonValue)
        console.log('Object saved!')
    } catch (e) {
        console.log('Something wrong happend!')
    }
  }

export const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key, null, 2)
      console.log('Get Object!')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log('Something wrong happend!')
    }
  }

