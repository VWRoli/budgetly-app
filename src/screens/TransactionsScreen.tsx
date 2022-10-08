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
import FAB from '../components/common/FAB';
import EmptyScreen from '../components/common/EmptyScreen';

const TransactionsScreen = () => {
  const [state, dispatch] = useReducer(transactionsReducer, TRX_INIT_STATE);
  const { defaultBudget } = useBudgetsContext();

  useEffect(() => {
    getTransactions(dispatch, defaultBudget?._id);
  }, [defaultBudget]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        {/* <AddTransaction /> */}
      </View>
      {state.loading && <Text>Loading...</Text>}
      {!state.transactions.length && (
        <EmptyScreen
          text="You don't have any transactions yet."
          btnLabel="Add your first transaction"
          pressHandler={() => {}}
        />
      )}
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
          {state.transactions.map((trx: transactionType) => (
            <TransactionCard key={trx.id} trx={trx} />
          ))}
        </View>
      </ScrollView>
      <FAB pressHandler={() => {}} type="primary" icon="plus" size={40} />
    </View>
  );
};

export default TransactionsScreen;
