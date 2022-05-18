import React from 'react';
//Components
import { ScrollView, Text, View } from 'react-native';
import TransactionCard from '../components/TransactionCard';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { transactionType } from '../types/transactionType';

const TransactionsScreen = () => {
  const {
    data: transactions,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}users/1/transactions`);

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
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          transactions.map((tr: transactionType) => (
            <TransactionCard
              payee={tr.payee}
              amount={tr.amount}
              date={tr.date}
              category={
                tr.income
                  ? 'Income'
                  : `${tr.categoryTitle}/${tr.budgetItemTitle}`
              }
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default TransactionsScreen;
