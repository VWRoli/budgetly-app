import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainCard from '../components/MainCard';
import {
  blueGradient,
  greenGradient,
  orangeGradient,
  purpleGradient,
} from '../constants/constants';

const Budget = () => {
  return (
    <View style={styles.wrapper}>
      <MainCard
        title="Income"
        amount={2000}
        currency="Huf"
        color={greenGradient}
      />
      <MainCard
        title="Expense"
        amount={2000}
        currency="Huf"
        color={blueGradient}
      />

      <MainCard
        title="Current Balance"
        amount={2000}
        currency="Huf"
        color={purpleGradient}
      />
      <MainCard
        title="Available to budget"
        amount={2000}
        currency="Huf"
        color={orangeGradient}
      />
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
