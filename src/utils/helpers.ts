import AsyncStorage from '@react-native-async-storage/async-storage';

//todo locale: string, currency: string,
export const formatter = (amount: number) =>
  new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'huf',
    minimumFractionDigits: 0,
  }).format(amount);

export const rng = () => Math.floor(Math.random() * 5);

export const localStorageUtils = {
  storeData: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  },
  getData: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key).then((res) => res);

      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  },
  removeData: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  },
};
