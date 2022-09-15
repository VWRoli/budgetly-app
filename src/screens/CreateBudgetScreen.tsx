import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { currencyCodes } from '../constants/currencyList';
import * as api from '../api';
import { useBudgetsContext } from '../context/BudgetsContext';
import { budgetType } from '../types/budgetType';
//Components
import MonthHeader from '../components/Budget/MonthHeader';
import Button from '../components/common/Button';
import HeaderText from '../components/common/HeaderText';
import CurrencyItem from '../components/CurrencyItem';
import CustomText from '../components/common/CustomText';
import { useFetch } from '../hooks/useFetch';
import { BASE_URL } from '../constants/constants';

const CreateBudgetScreen = ({ navigation }: { navigation: any }) => {
  const { ownedBudgets } = useBudgetsContext();

  const [isLoading, setIsLoading] = useState(false);

  const [selected, setSelected] = useState<string>('EUR');
  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.createBudget({
        currency: selected,
        balance: 0,
      });
      if (data) {
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
    ownedBudgets.some((b: budgetType) => b.currency === cc.currencyCode),
  ).length;

  const availableBudgets = currencyCodes.filter((cc) =>
    ownedBudgets.every((b: budgetType) => b.currency !== cc.currencyCode),
  );

  return (
    <View style={styles.container}>
      <MonthHeader />
      <HeaderText
        text="Add new budget"
        styles={{ paddingLeft: 10, marginVertical: 10 }}
      />
      <View style={styles.listWrapper}>
        {isLoading && (
          <View>
            <ActivityIndicator size="large" color="#06B3C4" />
          </View>
        )}

        {!isLoading && (
          <View>
            {currentBudgets ? (
              <CustomText text="Your current budgets" />
            ) : (
              <></>
            )}
            {currencyCodes
              .filter((cc) =>
                ownedBudgets.some(
                  (acc: any) => acc.currency === cc.currencyCode,
                ),
              )
              .map((cc) => (
                <CurrencyItem
                  key={cc.flagCode}
                  currencyCode={cc.currencyCode}
                  flagCode={cc.flagCode}
                  disabled
                />
              ))}
          </View>
        )}

        {!isLoading && (
          <View>
            {availableBudgets ? <CustomText text="Available Budgets" /> : <></>}
            {currencyCodes
              .filter((cc) =>
                ownedBudgets.every(
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
          disabled={isLoading}
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
