import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { currencyCodes } from '../constants/currencyList';
import { useBudgetsContext } from '../context/BudgetsContext';
import { budgetType } from '../types/budgetType';
import { createBudget } from '../actions/budget';
//Components
import MonthHeader from '../components/common/MonthHeader';
import Button from '../components/common/Button';
import HeaderText from '../components/common/HeaderText';
import CurrencyItem from '../components/CurrencyItem';
import CustomText from '../components/common/CustomText';
import OwnedBudgets from '../components/Budget/OwnedBudgets';

const CreateBudgetScreen = ({ navigation }: { navigation: any }) => {
  const { state, dispatch } = useBudgetsContext();
  const [selected, setSelected] = useState<string>('EUR');

  const handleCreate = async () => {
    const budgetData = { currency: selected, balance: 0, accounts: [] };
    createBudget(dispatch, budgetData);
    navigation.navigate('BudgetStack');
  };

  const currentBudgets = currencyCodes.filter((cc) =>
    state.ownedBudgets?.some((b: budgetType) => b.currency === cc.currencyCode),
  ).length;

  const availableBudgets = currencyCodes.filter((cc) =>
    state.ownedBudgets?.every(
      (b: budgetType) => b.currency !== cc.currencyCode,
    ),
  );

  return (
    <View style={styles.container}>
      <MonthHeader />
      <View style={{ marginVertical: 10 }}>
        <HeaderText
          text="Add new budget"
          styles={{ paddingLeft: 10, marginVertical: 10 }}
        />
      </View>
      <View style={styles.listWrapper}>
        {state.loading && (
          <View>
            <ActivityIndicator size="large" color="#06B3C4" />
          </View>
        )}

        {!state.loading && (
          <View style={{ marginTop: 35 }}>
            {currentBudgets ? (
              <CustomText text="Your current budgets" />
            ) : (
              <></>
            )}
            <OwnedBudgets disabled />
          </View>
        )}

        {!state.loading && (
          <View>
            {availableBudgets.length ? (
              <CustomText text="Available Budgets" />
            ) : (
              <></>
            )}
            {currencyCodes
              .filter((cc) =>
                state.ownedBudgets?.every(
                  (acc: any) => acc.currency !== cc.currencyCode,
                ),
              )
              .map((cc) => (
                <CurrencyItem
                  key={cc.flagCode}
                  currencyCode={cc.currencyCode}
                  flagCode={cc.flagCode}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
          </View>
        )}
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          label="Create Budget"
          pressHandler={handleCreate}
          disabled={state.loading || availableBudgets.length === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listWrapper: {
    marginHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
});

export default CreateBudgetScreen;
