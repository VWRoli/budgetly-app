import React from 'react';
import { Text, View } from 'react-native';
import Logo from '../assets/Logo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Componenets
import HeaderText from '../components/common/HeaderText';
import Button from '../components/common/Button';

const RegistrationSuccessScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 35,
        backgroundColor: '#fff',
      }}
    >
      <Logo />
      <View style={{ alignItems: 'center' }}>
        <HeaderText
          text="Registration Successful!"
          styles={{ color: '#00c851', marginBottom: 10 }}
          size={26}
        />
        <Icon name="check-circle-outline" color="#00c851" size={46} />
      </View>
      <Button
        label="Enter budgetly"
        pressHandler={() => navigation.navigate('Budget')}
      />
    </View>
  );
};

export default RegistrationSuccessScreen;
