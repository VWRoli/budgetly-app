import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import ReportsScreen from '../screens/ReportsScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import DashStack from './DashStack';

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

          if (route.name === 'Dashboard') {
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
      })}
    >
      <Tab.Screen name="Dashboard" component={DashStack} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
