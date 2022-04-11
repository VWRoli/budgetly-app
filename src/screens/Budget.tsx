import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainCard from '../components/MainCard';

const Budget = () => {
  return (
    <View style={styles.wrapper}>
      <MainCard title="Income" amount={2000} currency="Huf" />
      <MainCard title="Expense" amount={2000} currency="Huf" />
      <MainCard title="Current Balance" amount={2000} currency="Huf" />
      <MainCard title="Available to budget" amount={2000} currency="Huf" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Budget;
