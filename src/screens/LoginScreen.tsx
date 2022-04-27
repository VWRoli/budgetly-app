import React from 'react';
import { View } from 'react-native';
import Logo from '../assets/Logo';
//Components
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Link from '../components/common/Link';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Container from '../components/common/Container';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container>
      <Logo />
      <View
        style={{
          width: '85%',
          paddingVertical: 15,
        }}
      >
        <HeaderText text="Login" />
      </View>
      <Input
        placeholder="Email"
        value={text}
        changeHandler={() => setText(text)}
        icon="alternate-email"
      />
      <Input
        placeholder="Password"
        value={text}
        secureTextEntry
        icon="lock-outline"
        changeHandler={() => setPassword(password)}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '85%',
          paddingVertical: 15,
        }}
      >
        <Link
          text="Forgot password?"
          pressHandler={() => navigation.navigate('Reminder')}
        />
      </View>
      <Button label="Login" pressHandler={() => {}} />

      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <CustomText text="New to budgetly?" styles={{ marginRight: 5 }} />
        <Link
          text="Register"
          pressHandler={() => navigation.navigate('Signup')}
        />
      </View>
    </Container>
  );
};

export default LoginScreen;
