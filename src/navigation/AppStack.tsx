import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BudgetsProvider, useBudgetsContext } from '../context/BudgetsContext';
import { useFetch } from '../hooks/useFetch';
import { BASE_URL } from '../constants/constants';
import { ActivityIndicator, View } from 'react-native';
//Screens
import CreateBudgetScreen from '../screens/CreateBudgetScreen';
import BudgetStack from './BudgetStack';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = (): JSX.Element => {
  const { setOwnedBudgets } = useBudgetsContext();
  const { data, isLoading, isError } = useFetch(`${BASE_URL}budgets`);

  useEffect(() => {
    setOwnedBudgets(data);
  }, [data]);

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
        {!data.length ? (
          <Stack.Screen
            name="CreateBudget"
            component={CreateBudgetScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Budget"
            component={BudgetStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </BudgetsProvider>
  );
};

export default AppStack;
