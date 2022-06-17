import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ReminderScreen from '../screens/ReminderScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import RegistrationSuccessScreen from '../screens/RegistrationSuccessScreen';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Reminder" component={ReminderScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Success" component={RegistrationSuccessScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
