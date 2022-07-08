import EncryptedStorage from 'react-native-encrypted-storage';

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
      await EncryptedStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  },
  getData: async (key: string) => {
    try {
      const value = await EncryptedStorage.getItem(key);

      if (value !== undefined) {
        return value;
      }
    } catch (error) {
      console.log(error);
    }
  },
  removeData: async (key: string) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  },
};
