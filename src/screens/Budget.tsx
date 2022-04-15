import React from 'react';
import { View, StyleSheet } from 'react-native';
import BudgetItem from '../components/BudgetCategory';
import BudgetCategory from '../components/BudgetTitle';
import Card from '../components/Card';
import {
  blueGradient,
  greenGradient,
  orangeGradient,
  purpleGradient,
} from '../constants/constants';

const Budget = () => {
  return (
    <View style={styles.wrapper}>
      <Card
        title="Income"
        amount={2000}
        currency="Huf"
        color={greenGradient}
        iconName="money"
      />
      <Card
        title="Expense"
        amount={2000}
        currency="Huf"
        color={blueGradient}
        iconName="money-off"
      />

      <Card
        title="Current Balance"
        amount={2000}
        currency="Huf"
        color={purpleGradient}
        iconName="account-balance"
      />
      <Card
        title="Available to budget"
        amount={2000}
        currency="Huf"
        color={orangeGradient}
        iconName="account-balance-wallet"
      />
      <BudgetCategory />
      <BudgetItem title="Internet" budgeted={15000} />
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
