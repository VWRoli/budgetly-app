import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Logo from '../assets/Logo';
import validator from 'validator';
//Components
import HeaderText from '../components/common/HeaderText';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Link from '../components/common/Link';
import Container from '../components/common/Container';
import InputErrorMsg from '../components/common/InputErrorMsg';

//todo navigation type
const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignUp = () => {
    //reset fields
    setEmailError(false);
    setPasswordError(false);
    setUsernameError(false);

    if (!username) {
      setUsernameError(true);
    }
    if (!validator.isEmail(email)) {
      setEmailError(true);
    }
    if (!validator.isStrongPassword(password)) {
      setPasswordError(true);
    }
  };

  return (
    <Container>
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
        changeHandler={setUsername}
        icon="person-outline"
      />
      {usernameError && <InputErrorMsg msg="Please provide a username" />}
      <Input
        placeholder="Email"
        value={email}
        changeHandler={setEmail}
        icon="alternate-email"
      />
      {emailError && (
        <InputErrorMsg msg="Please provide a properly formatted email address" />
      )}
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        icon="lock-outline"
        changeHandler={setPassword}
      />
      {passwordError && (
        <>
          <InputErrorMsg msg="Password must be min 8 charachters long" />
          <InputErrorMsg msg="Must contain a lowercase and an uppercase letter" />
          <InputErrorMsg msg="Must contain a number and a symbol" />
        </>
      )}

      <View
        style={{
          flexDirection: 'row',
          width: '85%',
          flexWrap: 'wrap',
          marginVertical: 15,
        }}
      >
        <CustomText
          text="By signing up, you're agree to our "
          styles={{ fontSize: 12 }}
        />
        <Link
          text="Privacy Policy"
          pressHandler={() => navigation.navigate('Privacy')}
          styles={{ fontSize: 12 }}
        />
      </View>
      <Button label="Sign up" pressHandler={handleSignUp} />

      <View style={{ flexDirection: 'row', marginTop: 25 }}>
        <CustomText
          text="Already have an account"
          styles={{ marginRight: 5 }}
        />
        <Link text="Login" pressHandler={() => navigation.navigate('Login')} />
      </View>
    </Container>
  );
};

export default SignupScreen;
