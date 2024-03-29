import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Components
import ReportsScreen from '../screens/ReportsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import Dashscreen from '../screens/DashScreen';

const Tab = createBottomTabNavigator();

const BudgetStack = () => {
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

          if (route.name === 'Dash') {
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
      <Tab.Screen name="Dash" component={Dashscreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        // options={{
        //   headerShown: true,
        //   title: 'Transactions',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        //   headerTintColor: '#1D3777',
        // }}
      />
    </Tab.Navigator>
  );
};

export default BudgetStack;
