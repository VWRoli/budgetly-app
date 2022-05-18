import React from 'react';
import { ScrollView, View } from 'react-native';
import { BASE_URL, skeletonArray } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { transactionType } from '../types/transactionType';
//Components
import TransactionCard from '../components/TransactionCard';
import SkeletonTransaction from '../components/Skeletons/SkeletonTransaction';
import Fab from '../components/common/Fab';

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
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        style={{
          flex: 1,
          backgroundColor: '#f8f7f7',
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
      <Fab />
    </View>
  );
};

export default TransactionsScreen;
