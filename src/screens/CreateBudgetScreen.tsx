import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { currencyCodes } from '../constants/currencyList';
import * as api from '../api';
import { useBudgetsContext } from '../context/BudgetsContext';
import { budgetType } from '../types/budgetType';
//Components
import MonthHeader from '../components/common/MonthHeader';
import Button from '../components/common/Button';
import HeaderText from '../components/common/HeaderText';
import CurrencyItem from '../components/CurrencyItem';
import CustomText from '../components/common/CustomText';
import OwnedBudgets from '../components/Budget/OwnedBudgets';

const CreateBudgetScreen = ({ navigation }: { navigation: any }) => {
  const { state } = useBudgetsContext();
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<string>('EUR');

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.createBudget({
        currency: selected,
        balance: 0,
        accounts: [],
      });

      await api.updateProfile({
        defaultBudget: data._id,
      });

      if (data) {
        //todosetOwnedBudgets((prev) => [...prev, data]);
        //todo setDefaultBudget(data);
        navigation.navigate('BudgetStack');
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      //todo error handling
      setIsLoading(false);
    }
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
        {isLoading && (
          <View>
            <ActivityIndicator size="large" color="#06B3C4" />
          </View>
        )}

        {!isLoading && (
          <View style={{ marginTop: 35 }}>
            {currentBudgets ? (
              <CustomText text="Your current budgets" />
            ) : (
              <></>
            )}
            <OwnedBudgets disabled />
          </View>
        )}

        {!isLoading && (
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
          disabled={isLoading || availableBudgets.length === 0}
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
