import { Link } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import Logo from '../assets/Logo';
import Input from '../components/common/Input';

const LoginScreen = () => {
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
        Login
      </Button>
      <Link to={{ screen: 'Signup' }} style={{ color: '#1E84F3' }}>
        Not a member? Sign up!
      </Link>

      <Link to={{ screen: 'Home' }} style={{ color: '#1E84F3' }}>
        Forgot password?
      </Link>
    </View>
  );
};

export default LoginScreen;
