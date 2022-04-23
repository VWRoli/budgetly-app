import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginProps } from '../screens/LoginScreen';
//Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login">
        {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        
      /> */}
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
