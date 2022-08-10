import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
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

  return (
    <View style={styles.container}>
      <MonthHeader />
      <HeaderText
        text="Add new account"
        styles={{ paddingLeft: 15, marginTop: 10 }}
      />

      {isLoading ? (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" color="#06B3C4" />
        </View>
      ) : (
        currencyCodes.map((c: { flagCode: string; currencyCode: string }) => (
          <CurrencyItem
            key={c.flagCode}
            currencyCode={c.currencyCode}
            flagCode={c.flagCode}
            setSelected={setSelected}
            selected={selected}
            disabled={ownedAccounts.some((acc: any) => {
              console.log(acc.currency === c.currencyCode);
              return acc.currency === c.currencyCode;
            })}
          />
        ))
      )}
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
