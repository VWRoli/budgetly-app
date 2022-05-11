import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import BudgetScreen from '../screens/BudgetScreen';
import BudgetDetailScreen from '../screens/BudgetDetailScreen';

const Stack = createNativeStackNavigator();

const DashStack: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Budget" component={BudgetScreen} />
      <Stack.Screen name="BudgetDetail" component={BudgetDetailScreen} />
    </Stack.Navigator>
  );
};

export default DashStack;
