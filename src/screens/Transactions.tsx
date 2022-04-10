import React from 'react';
import { StyleSheet, View } from 'react-native';
import Transaction from '../components/Transaction';
import Data from '../api/data.json';

const Transactions = () => {
  return (
    <View style={styles.container}>
      {Data.transactions.map((tr) => (
        <Transaction key={tr.id} props={tr} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Transactions;
