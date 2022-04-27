import React from 'react';
import { View } from 'react-native';
import Logo from '../assets/Logo';
//Components
import Wrapper from '../components/common/Wrapper';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const ReminderScreen = () => {
  const [text, setText] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Logo />
      <View
        style={{
          width: '90%',
          paddingVertical: 15,
        }}
      >
        <HeaderText text="Forgot Password?" styles={{ width: '45%' }} />
      </View>
      <Wrapper>
        <CustomText
          text="Don't worry! It happens. Please enter the email address associated with your account."
          styles={{ fontSize: 12 }}
        />
      </Wrapper>
      <View style={{ marginVertical: 25 }}>
        <Input
          placeholder="Email"
          value={text}
          changeHandler={() => setText(text)}
          icon="alternate-email"
        />
      </View>
      <Button label="Submit" pressHandler={() => {}} />
    </View>
  );
};

export default ReminderScreen;
