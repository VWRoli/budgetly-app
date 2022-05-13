import React from 'react';
//Components
import { View } from 'react-native';
import { Text } from 'react-native';
import TransactionCard from '../components/TransactionCard';

const TransactionsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View style={{ width: '85%' }}>
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
        <TransactionCard
          payee="Amazon"
          amount={3560}
          date="2011-10-05T14:48:00.000Z"
          category="Bills"
        />
      </View>
    </View>
  );
};

export default TransactionsScreen;
