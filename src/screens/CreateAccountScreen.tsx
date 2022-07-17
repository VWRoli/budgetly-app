import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Fab from '../components/common/Fab';
import CurrenciesList from '../components/CurrenciesList';

const CreateAccountScreen = () => {
  const handleCreate = () => {};
  return (
    <View style={styles.container}>
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
