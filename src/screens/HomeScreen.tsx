import React from 'react';
import { View } from 'react-native';
//import { Button } from 'react-native-paper';
import Button from '../components/common/Button';
import Logo from '../assets/Logo';
import CustomText from '../components/common/CustomText';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
      <View style={{ width: '90%', alignItems: 'center' }}>
        <Button
          label="Register Now"
          pressHandler={() => navigation.navigate('Signup')}
        />
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <CustomText
            text="Already have an acccount?"
            styles={{ marginRight: 5 }}
          />
          <CustomText text="Sign In" primary bold />
        </View>
      </View>
      {/* <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{ marginVertical: 10 }}
      >
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Signup')}>
        Sign Up
      </Button> */}
    </View>
  );
};

export default HomeScreen;
