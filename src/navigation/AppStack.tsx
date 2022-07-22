import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import CreateAccountScreen from '../screens/CreateAccountScreen';
import BudgetStack from './BudgetStack';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Budget"
        component={BudgetStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
