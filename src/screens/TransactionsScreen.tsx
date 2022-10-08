import React, { useReducer } from 'react';
import { ScrollView, View } from 'react-native';
import { skeletonArray } from '../constants/constants';
import { transactionType } from '../types/transactionType';
import {
  TR_INIT_STATE,
  transactionsReducer,
} from '../reducers/transactionsReducer';
//Components
import TransactionCard from '../components/TransactionCard';
import SkeletonTransaction from '../components/Skeletons/SkeletonTransaction';
import AddTransaction from '../components/AddTransaction';

const TransactionsScreen = () => {
  const [state, dispatch] = useReducer(transactionsReducer, TR_INIT_STATE);

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
          {state.loading
            ? skeletonArray.map((_, i) => <SkeletonTransaction key={i} />)
            : state.transactions.map((tr: transactionType) => (
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
