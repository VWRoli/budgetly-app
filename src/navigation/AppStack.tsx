import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import ReportsScreen from '../screens/ReportsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import BudgetScreen from '../screens/BudgetScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';

const Tab = createBottomTabNavigator();

const AppStack: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 55,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        tabBarShowLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Budget') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Reports') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (route.name === 'Transactions') {
            iconName = focused
              ? 'md-arrow-forward-circle'
              : 'md-arrow-forward-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#06B3C4',
        tabBarInactiveTintColor: '#8B8C9E',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Budget" component={BudgetScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          headerShown: true,
          title: 'Transactions',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#1D3777',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
