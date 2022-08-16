import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createAccount } from '../api';
import { currencyCodes } from '../constants/currencyList';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { localStorageUtils } from '../utils/helpers';
//Components
import MonthHeader from '../components/Budget/MonthHeader';
import Button from '../components/common/Button';
import HeaderText from '../components/common/HeaderText';
import CurrencyItem from '../components/CurrencyItem';
import CustomText from '../components/common/CustomText';

const CreateAccountScreen = ({ navigation }: { navigation: any }) => {
  //todo set usertoken into a context, should use usefetch instead to post data, or get token in fetch function
  const [userToken, setUserToken] = useState<string>('');
  const {
    data: ownedAccounts,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}accounts`);

  const getLocalData = async () => {
    const localData = await localStorageUtils.getData('token');
    if (localData) setUserToken(localData);
  };
  useEffect(() => {
    getLocalData();
  }, []);

  const [selected, setSelected] = useState<string>('EUR');
  const handleCreate = async () => {
    {
      const account = await createAccount(
        { currency: selected, balance: 0 },
        userToken,
      );
      if (account) {
        navigation.navigate('Budget');
      }
    }
  };
  //todo returns object with error property, unauthenticated error, don't know why exactly
  if (ownedAccounts.error) {
    return (
      <View style={styles.container}>
        <Text>{ownedAccounts.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MonthHeader />
      <HeaderText
        text="Add new account"
        styles={{ paddingLeft: 10, marginTop: 10 }}
      />
      <View style={{ marginHorizontal: 10 }}>
        {isLoading && (
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large" color="#06B3C4" />
          </View>
        )}

        {!isLoading && (
          <View>
            <CustomText text="Your current accounts" />
            {currencyCodes
              .filter((cc) =>
                ownedAccounts.some(
                  (acc: any) => acc.currency === cc.currencyCode,
                ),
              )
              .map((cc) => (
                <CurrencyItem
                  key={cc.flagCode}
                  currencyCode={cc.currencyCode}
                  flagCode={cc.flagCode}
                  disabled
                />
              ))}
          </View>
        )}
        {!isLoading && (
          <View>
            <CustomText text="Available accounts" />
            {currencyCodes
              .filter((cc) =>
                ownedAccounts.every(
                  (acc: any) => acc.currency !== cc.currencyCode,
                ),
              )
              .map((cc) => (
                <CurrencyItem
                  key={cc.flagCode}
                  currencyCode={cc.currencyCode}
                  flagCode={cc.flagCode}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
          </View>
        )}
      </View>

      <View style={styles.buttonWrapper}>
        <Button label="Create account" pressHandler={handleCreate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
});

export default CreateAccountScreen;
