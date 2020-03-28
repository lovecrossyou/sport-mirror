import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('storeData key', key);
    console.log('storeData value', value);
  } catch (e) {
    console.log('storeData fail');
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('storeData getData null');
    return null;
  }
}; 

export default {storeData, getData};
