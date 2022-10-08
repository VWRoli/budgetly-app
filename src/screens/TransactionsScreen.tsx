import React, { useEffect, useReducer } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { skeletonArray } from '../constants/constants';
import { transactionType } from '../types/transactionType';
import {
  TRX_INIT_STATE,
  transactionsReducer,
} from '../reducers/transactionsReducer';
//Components
import TransactionCard from '../components/TransactionCard';
import SkeletonTransaction from '../components/Skeletons/SkeletonTransaction';
import AddTransaction from '../components/AddTransaction';
import { getTransactions } from '../actions/transactions';
import { useBudgetsContext } from '../context/BudgetsContext';

const TransactionsScreen = () => {
  const [state, dispatch] = useReducer(transactionsReducer, TRX_INIT_STATE);
  const { defaultBudget } = useBudgetsContext();

  useEffect(() => {
    getTransactions(dispatch, defaultBudget?._id);
  }, [defaultBudget]);

  console.log(state.transactions);

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
        {/* <AddTransaction /> */}
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
          {state.loading ? (
            <Text>Loading...</Text>
          ) : (
            state.transactions.map((trx: transactionType) => (
              <TransactionCard key={trx.id} trx={trx} />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionsScreen;
