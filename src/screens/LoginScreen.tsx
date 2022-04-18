import React from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

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
      <TextInput
        style={{ width: '60%' }}
        label="Email"
        value={text}
        mode="outlined"
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        style={{ width: '60%' }}
        label="Password"
        value={password}
        mode="outlined"
        onChangeText={(password) => setPassword(password)}
      />
      <Button mode="contained">Login</Button>
    </View>
  );
};

export default LoginScreen;
