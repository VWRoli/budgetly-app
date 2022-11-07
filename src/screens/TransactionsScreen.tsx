import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { getTransactions } from '../actions/transactions';
import { useBudgetsContext } from '../context/BudgetsContext';
import { transactionType } from '../types/transactionType';
import { convertISODateToLocalDate } from '../utils/helpers';
//Components
import TransactionCard from '../components/Transactions/TransactionCard';
import AddTransaction from '../components/Transactions/AddTransaction';
import FAB from '../components/common/FAB';
import EmptyScreen from '../components/common/EmptyScreen';
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomText from '../components/common/CustomText';

const TransactionsScreen = () => {
  const { state, dispatch } = useBudgetsContext();
  const { defaultBudget } = useBudgetsContext();
  const [transaction, setTransaction] = useState<transactionType | null>(null);
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
              <CustomText text={convertISODateToLocalDate(txn.date)} />

              <TransactionCard
                txn={txn}
                onOpen={() => {
                  setTransaction(txn);
                  refRBSheet.current!.open();
                }}
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
        onClose={() => setTransaction(null)}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <AddTransaction
          transaction={transaction}
          onClose={() => {
            setTransaction(null);
            refRBSheet.current!.close();
          }}
        />
      </RBSheet>
    </View>
  );
};

export default TransactionsScreen;
