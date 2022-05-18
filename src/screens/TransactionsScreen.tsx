import React from 'react';
//Components
import { ScrollView, View } from 'react-native';
import TransactionCard from '../components/TransactionCard';

const TransactionsScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View style={{ width: '85%' }}>
        <TransactionCard
          payee="Amazon"
          amount={3560}
          date="2011-10-05T14:48:00.000Z"
          category="Expenses/Fuel"
        />
        <TransactionCard
          payee="Amazon"
          amount={3560}
          date="2011-10-05T14:48:00.000Z"
          category="Bills"
        />
        <TransactionCard
          payee="Amazon"
          amount={3560}
          date="2011-10-05T14:48:00.000Z"
          category="Bills"
        />
        <TransactionCard
          payee="Amazon"
          amount={3560}
          date="2011-10-05T14:48:00.000Z"
          category="Bills"
        />
      </View>
    </ScrollView>
  );
};

export default TransactionsScreen;
