import EncryptedStorage from 'react-native-encrypted-storage';
import { currencyCodes } from '../constants/currencyList';
import { budgetType } from '../types/budgetType';
import { categoryType } from '../types/categoryType';

//todo locale: string, currency: string,
export const formatter = (amount: number, currency?: string) =>
  new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: currency,
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

export const filterCurrentBudgets = (ownedBudgets: budgetType[]) =>
  currencyCodes.filter((cc) =>
    ownedBudgets.some((b: budgetType) => b.currency === cc.currencyCode),
  ).length;

export const getCategoryDropdownValues = (categories: categoryType[]) => {
  const res = categories.flatMap((c) => {
    const parent = { label: c.title, value: c.title, disabled: true };

    const child = c.budgetItems?.flatMap((b) => ({
      label: b.title,
      value: b.title,
      parent: c.title,
    }));

    //console.log('res', [parent, ...(child || [])]);
    return [parent, ...(child || [])];
  });
  //console.log('finalRes', res);
  return res;
};
