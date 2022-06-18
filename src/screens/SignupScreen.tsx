import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';
import Logo from '../assets/Logo';
import validator from 'validator';
import * as api from '../api';
import Toast from 'react-native-toast-message';
import { useFormik } from 'formik';
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
  const [isLoading, setIsLoading] = useState(false);

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { username: '', email: '', password: '' },
    onSubmit: (values) =>
      console.log(
        `Username: ${values.username}, Email: ${values.email}, Password: ${values.password}`,
      ),
  });

  const showError = (status: string) => {
    Toast.show({
      type: 'error',
      text1: `Error!`,
      text2: status,
    });
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    //reset fields
    setEmailError(false);
    setPasswordError(false);
    setUsernameError(false);

    if (!username || username.length < 6) {
      setUsernameError(true);
    }
    if (!validator.isEmail(email)) {
      setEmailError(true);
    }
    if (!validator.isStrongPassword(password)) {
      setPasswordError(true);
    }
    if (!emailError && !passwordError && !usernameError) {
      const res = await api.signUp({ username, email, password });

      if (res != 201) {
        showError(res);
      } else {
        navigation.navigate('Success');
      }
    }
    setIsLoading(false);
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
        changeHandler={handleChange('username')}
        autoCapitalize="none"
        autoCompleteType="username"
        icon="person-outline"
        editable={!isLoading}
        returnKeyType="next"
        returnKeyLabel="next"
      />
      {usernameError && (
        <InputErrorMsg msg="Username should be more than 6 characters" />
      )}
      <Input
        placeholder="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        changeHandler={handleChange('email')}
        icon="alternate-email"
        editable={!isLoading}
        returnKeyType="next"
        returnKeyLabel="next"
      />
      {emailError && (
        <InputErrorMsg msg="Please provide a properly formatted email address" />
      )}
      <Input
        placeholder="Password"
        secureTextEntry
        icon="lock-outline"
        changeHandler={handleChange('password')}
        autoCompleteType="password"
        autoCapitalize="none"
        editable={!isLoading}
        returnKeyType="go"
        returnKeyLabel="go"
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
        {isLoading ? (
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large" color="#06B3C4" />
          </View>
        ) : (
          <>
            <CustomText
              text="By signing up, you're agree to our "
              styles={{ fontSize: 12 }}
            />
            <Link
              text="Privacy Policy"
              pressHandler={() => navigation.navigate('Privacy')}
              styles={{ fontSize: 12 }}
            />
          </>
        )}
      </View>
      <Button
        label="Sign up"
        pressHandler={handleSubmit}
        disabled={isLoading}
      />
      {isLoading ? (
        <></>
      ) : (
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <CustomText
            text="Already have an account"
            styles={{ marginRight: 5 }}
          />
          <Link
            text="Login"
            pressHandler={() => navigation.navigate('Login')}
          />
        </View>
      )}
    </Container>
  );
};

export default SignupScreen;
