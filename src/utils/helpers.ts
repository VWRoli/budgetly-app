import AsyncStorage from '@react-native-async-storage/async-storage';

//todo locale: string, currency: string,
export const formatter = (amount: number) =>
  new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'huf',
    minimumFractionDigits: 0,
  }).format(amount);

export const rng = () => Math.floor(Math.random() * 5);

//only stores string data, if we want to
export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key).then((res) => res);

    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
