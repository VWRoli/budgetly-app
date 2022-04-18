import React from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
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
      <Input label="Email" value={text} changeHandler={() => setText(text)} />
      <Input
        label="Password"
        value={password}
        changeHandler={() => setPassword(password)}
      />
      <Button mode="contained" style={{ marginTop: 10, borderRadius: 10 }}>
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;
