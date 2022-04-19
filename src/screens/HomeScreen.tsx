import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Signup')}>
        Sign Up
      </Button>
    </View>
  );
};

export default HomeScreen;
