import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Screens
import Budget from '../screens/Budget';
import Reports from '../screens/Reports';
import Transactions from '../screens/Transactions';

export const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Budget"
      screenOptions={{
        drawerActiveBackgroundColor: '#1976d2',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#1976d2',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Budget"
        component={Budget}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="view-dashboard" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reports"
        component={Reports}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="finance" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={Transactions}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="swap-horizontal" size={30} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
