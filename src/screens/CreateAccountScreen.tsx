import React from 'react';
import { StyleSheet, View } from 'react-native';
//Components
import Fab from '../components/common/Fab';
import HeaderText from '../components/common/HeaderText';
import CurrenciesList from '../components/CurrenciesList';

const CreateAccountScreen = ({ navigation }: { navigation: any }) => {
  const handleCreate = () => {
    {
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.container}>
      <HeaderText
        text="Add new account"
        styles={{ paddingLeft: 15, marginBottom: 15 }}
      />
      <CurrenciesList />
      <Fab label="Create account" pressHandler={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CreateAccountScreen;
