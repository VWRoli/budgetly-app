import React from 'react';
import { ScrollView, View } from 'react-native';
import { BASE_URL, skeletonArray } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { transactionType } from '../types/transactionType';
//Components
import TransactionCard from '../components/TransactionCard';
import SkeletonTransaction from '../components/Skeletons/SkeletonTransaction';
import AddTransaction from '../components/AddTransaction';

const TransactionsScreen = () => {
  const {
    data: transactions,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}users/1/transactions`);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <AddTransaction />
      </View>
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
          {isLoading
            ? skeletonArray.map((_, i) => <SkeletonTransaction key={i} />)
            : transactions.map((tr: transactionType) => (
                <TransactionCard
                  key={tr.id}
                  payee={tr.payee}
                  amount={tr.amount}
                  date={tr.date}
                  category={
                    tr.income
                      ? 'Income'
                      : `${tr.categoryTitle}/${tr.budgetItemTitle}`
                  }
                />
              ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionsScreen;
