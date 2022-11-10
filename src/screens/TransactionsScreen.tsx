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
import CustomHeader from '../components/common/CustomHeader';
import AccountDrawer from '../components/Transactions/AccountDrawer';

const TransactionsScreen = () => {
  const { state } = useBudgetsContext();
  const [transaction, setTransaction] = useState<transactionType | null>(null);
  const refRBSheet = React.createRef<RBSheet>();
  const accountDrawer = React.createRef<RBSheet>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <CustomHeader
        headerText="Transactions"
        leftIcon="plus"
        pressHandler={() => accountDrawer.current!.open()}
      />
      {state.loading && <Text>Loading...</Text>}
      {!state.defaultBudget?.accounts.length && (
        <EmptyScreen
          text="You don't have an account yet. Create your first by clicking below, to add transactions."
          btnLabel="Create your first account"
          pressHandler={() => accountDrawer.current!.open()}
        />
      )}
      {state.defaultBudget?.accounts.length && !state.transactions.length ? (
        <EmptyScreen
          text="You don't have any transactions yet."
          btnLabel="Add your first transaction"
          pressHandler={() => refRBSheet.current!.open()}
        />
      ) : (
        <></>
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
          {state.transactions
            .sort((a, b) => (b.date > a.date ? 1 : a.date > b.date ? -1 : 0))
            .map((txn: transactionType, i: number) => {
              const currentTxnDate = state.transactions[i].date.substring(
                0,
                10,
              );
              const prevTxnDate = state.transactions[i - 1]?.date.substring(
                0,
                10,
              );
              return (
                <React.Fragment key={txn._id}>
                  {i === 0 && (
                    <CustomText text={convertISODateToLocalDate(txn.date)} />
                  )}
                  {i > 0 && prevTxnDate !== currentTxnDate && (
                    <CustomText text={convertISODateToLocalDate(txn.date)} />
                  )}

                  <TransactionCard
                    txn={txn}
                    onOpen={() => {
                      setTransaction(txn);
                      refRBSheet.current!.open();
                    }}
                  />
                </React.Fragment>
              );
            })}
        </View>
      </ScrollView>
      {state.defaultBudget?.accounts.length ? (
        <FAB
          pressHandler={() => refRBSheet.current!.open()}
          type="primary"
          icon="plus"
          size={40}
        />
      ) : (
        <></>
      )}

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
      <RBSheet
        ref={accountDrawer}
        height={400}
        //onClose={() => setTransaction(null)}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <AccountDrawer handleClose={() => accountDrawer.current!.close()} />
      </RBSheet>
    </View>
  );
};

export default TransactionsScreen;
