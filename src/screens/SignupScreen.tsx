import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

      <Button mode="contained" style={{ marginTop: 10, borderRadius: 10 }}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignupScreen;
