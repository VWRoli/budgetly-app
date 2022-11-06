import React, { useEffect, useReducer, useState } from 'react';
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
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomText from '../components/common/CustomText';
import { convertISODateToLocalDate } from '../utils/helpers';

const TransactionsScreen = () => {
  const [state, dispatch] = useReducer(transactionsReducer, TRX_INIT_STATE);
  const { defaultBudget } = useBudgetsContext();
  const refRBSheet = React.createRef<RBSheet>();

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
      {state.loading && <Text>Loading...</Text>}
      {!state.transactions.length && (
        <EmptyScreen
          text="You don't have any transactions yet."
          btnLabel="Add your first transaction"
          pressHandler={() => refRBSheet.current!.open()}
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
        <View style={{ width: '95%' }}>
          {state.transactions.map((txn: transactionType, i: number) => (
            <React.Fragment key={txn._id}>
              {state.transactions[i].date !== state.transactions[i + 1] && (
                <CustomText text={convertISODateToLocalDate(txn.date)} />
              )}
              <TransactionCard
                txn={txn}
                onOpen={() => refRBSheet.current!.open()}
              />
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
      <FAB
        pressHandler={() => refRBSheet.current!.open()}
        type="primary"
        icon="plus"
        size={40}
      />

      <RBSheet
        ref={refRBSheet}
        height={400}
        // onClose={() => refRBSheet.current!.close()}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <AddTransaction
          state={state}
          dispatch={dispatch}
          onClose={() => refRBSheet.current!.close()}
        />
      </RBSheet>
    </View>
  );
};

export default TransactionsScreen;
