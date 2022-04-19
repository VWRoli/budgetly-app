import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Logo from '../assets/Logo';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{ marginVertical: 10 }}
      >
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Signup')}>
        Sign Up
      </Button>
    </View>
  );
};

export default HomeScreen;
