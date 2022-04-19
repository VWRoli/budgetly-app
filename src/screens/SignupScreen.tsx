import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Logo from '../assets/Logo';
import Input from '../components/common/Input';

const SignupScreen = () => {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Logo />
      <Input label="Email" value={text} changeHandler={() => setText(text)} />
      <Input
        label="Password"
        value={password}
        changeHandler={() => setPassword(password)}
      />

      <Button mode="contained" style={{ marginVertical: 10 }}>
        Sign Up
      </Button>
      <Link to={{ screen: 'Login' }} style={{ color: '#1E84F3' }}>
        Already signed up? Log in!
      </Link>
    </View>
  );
};

export default SignupScreen;
