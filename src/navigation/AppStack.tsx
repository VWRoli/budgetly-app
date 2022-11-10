import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useBudgetsContext } from '../context/BudgetsContext';

import { ActivityIndicator, View } from 'react-native';
//Screens
import CreateBudgetScreen from '../screens/CreateBudgetScreen';
import BudgetStack from './BudgetStack';
const Stack = createNativeStackNavigator();

const AppStack: React.FC = (): JSX.Element => {
  const { state } = useBudgetsContext();

  if (state.loading) {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}
      >
        <ActivityIndicator size="large" color="#06B3C4" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!state.ownedBudgets?.length ? (
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
        <>
          <Stack.Screen
            name="BudgetStack"
            component={BudgetStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateBudget"
            component={CreateBudgetScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
