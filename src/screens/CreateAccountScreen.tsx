import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
//Components
import Button from '../components/common/Button';
import HeaderText from '../components/common/HeaderText';
import CurrenciesList from '../components/CurrenciesList';

const CreateAccountScreen = ({ navigation }: { navigation: any }) => {
  const [selected, setSelected] = useState<string>('EUR');
  const handleCreate = () => {
    {
      console.log({ selected, balance: 0 });
      //navigation.navigate('Budget');
    }
  };
  return (
    <View style={styles.container}>
      <HeaderText
        text="Add new account"
        styles={{ paddingLeft: 15, marginTop: 10 }}
      />
      <CurrenciesList selected={selected} setSelected={setSelected} />
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
