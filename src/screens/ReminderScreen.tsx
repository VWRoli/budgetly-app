import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../assets/Logo';
//Components
import Wrapper from '../components/common/Wrapper';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import IconButton from '../components/common/IconButton';

const ReminderScreen = ({ navigation }: { navigation: any }) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.backButton}>
        <IconButton
          icon="chevron-left"
          pressHandler={() => navigation.goBack()}
        />
      </View>
      <Logo />
      <View style={styles.header}>
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
  header: {
    width: '90%',
    paddingVertical: 15,
  },
});

export default ReminderScreen;
