import React from 'react';
import { View } from 'react-native';
import Logo from '../assets/Logo';
//Components
import HeaderText from '../components/common/HeaderText';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Link from '../components/common/Link';

//todo navigation type
const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [text, setText] = React.useState('');
  const [username, setUsername] = React.useState('');
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
      <View
        style={{
          width: '85%',
          paddingVertical: 15,
        }}
      >
        <HeaderText text="Sign up" />
      </View>
      <Input
        placeholder="Username"
        value={username}
        changeHandler={() => setUsername(username)}
        icon="person-outline"
      />
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
          width: '85%',
          flexWrap: 'wrap',
          marginVertical: 15,
        }}
      >
        <CustomText
          text="By signing up, you're agree to our"
          styles={{ fontSize: 12 }}
        />
        <Link
          text="Terms & Conditions"
          pressHandler={() => navigation.navigate('Terms')}
          styles={{ fontSize: 12, marginHorizontal: 5 }}
        />

        <CustomText text="and" styles={{ fontSize: 12 }} />
        <Link
          text="Privacy Policy"
          pressHandler={() => navigation.navigate('Privacy')}
          styles={{ fontSize: 12 }}
        />
      </View>
      <Button label="Sign up" pressHandler={() => {}} />

      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <CustomText
          text="Already have an account"
          styles={{ marginRight: 5 }}
        />
        <Link text="Login" pressHandler={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default SignupScreen;
