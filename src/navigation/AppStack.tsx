import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BudgetsProvider, useBudgetsContext } from '../context/BudgetsContext';
import { useFetch } from '../hooks/useFetch';
import { BASE_URL } from '../constants/constants';
import { ActivityIndicator, View } from 'react-native';
import * as api from '../api';
//Screens
import CreateBudgetScreen from '../screens/CreateBudgetScreen';
import BudgetStack from './BudgetStack';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = (): JSX.Element => {
  const { ownedBudgets, setOwnedBudgets } = useBudgetsContext();
  const [isLoading, setIsLoading] = useState(true);
  //const { data, isLoading, isError } = useFetch(`${BASE_URL}budgets`);
  let data = [];

  const getOwnedAccounts = async () => {
    setIsLoading(true);
    try {
      console.log('pre');
      const { data } = await api.getBudgets();
      console.log('post');
      //todo it gets stuck on the api call, why?
      console.log(data);
      //console.log({ data });
      //setOwnedBudgets(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      //todo error handling
    }
  };

  useEffect(() => {
    getOwnedAccounts();
  }, []);
  // console.log({ ownedBudgets });
  if (isLoading) {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}
      >
        <ActivityIndicator size="large" color="#06B3C4" />
      </View>
    );
  }

  return (
    <BudgetsProvider>
      <Stack.Navigator>
        {!ownedBudgets.length ? (
          <>
            <Stack.Screen
              name="CreateBudget"
              component={CreateBudgetScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BudgetStack"
              component={BudgetStack}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="BudgetStack"
            component={BudgetStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </BudgetsProvider>
  );
};

export default AppStack;
