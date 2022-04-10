import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
//Screens
import Budget from './screens/Budget';
import Reports from './screens/Reports';
import Transactions from './screens/Transactions';

//To ignore warning
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Budget">
        <Drawer.Screen name="Budget" component={Budget} />
        <Drawer.Screen name="Reports" component={Reports} />
        <Drawer.Screen name="Transactions" component={Transactions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
