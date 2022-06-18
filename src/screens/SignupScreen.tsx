import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Logo from '../assets/Logo';
import * as api from '../api';
import Toast from 'react-native-toast-message';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//Components
import HeaderText from '../components/common/HeaderText';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Link from '../components/common/Link';
import Container from '../components/common/Container';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Username must be at least 6 character')
    .max(16, 'Username is too long - maximum 16 characters allowed')
    .required('Username is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - must be at least 8 characters long')

    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain one uppercase, one lowercase, one number and one special character',
    ),
});

//todo navigation type
const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
    useFormik({
      validationSchema: SignupSchema,
      initialValues: { username: '', email: '', password: '' },
      onSubmit: (values) => {
        console.log(
          `Username: ${values.username}, Email: ${values.email}, Password: ${values.password}`,
        );
      },
    });

  const showError = (status: string) => {
    Toast.show({
      type: 'error',
      text1: `Error!`,
      text2: status,
    });
  };

  // const handleSignUp = async () => {
  //   setIsLoading(true);
  //   //reset fields
  //   setEmailError(false);
  //   setPasswordError(false);
  //   setUsernameError(false);

  //   if (!username || username.length < 6) {
  //     setUsernameError(true);
  //   }
  //   if (!validator.isEmail(email)) {
  //     setEmailError(true);
  //   }
  //   if (!validator.isStrongPassword(password)) {
  //     setPasswordError(true);
  //   }
  //   if (!emailError && !passwordError && !usernameError) {
  //     const res = await api.signUp({ username, email, password });

  //     if (res != 201) {
  //       showError(res);
  //     } else {
  //       navigation.navigate('Success');
  //     }
  //   }
  //   setIsLoading(false);
  // };

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
        // editable={!isLoading}
        onBlur={handleBlur('username')}
        error={errors.username}
        touched={touched.username}
        returnKeyType="next"
        returnKeyLabel="next"
      />

      <Input
        placeholder="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        changeHandler={handleChange('email')}
        onBlur={handleBlur('email')}
        error={errors.email}
        touched={touched.email}
        icon="alternate-email"
        // editable={!isLoading}
        returnKeyType="next"
        returnKeyLabel="next"
      />

      <Input
        placeholder="Password"
        secureTextEntry
        icon="lock-outline"
        changeHandler={handleChange('password')}
        autoCompleteType="password"
        autoCapitalize="none"
        onBlur={handleBlur('password')}
        error={errors.password}
        touched={touched.password}
        returnKeyType="go"
        returnKeyLabel="go"
      />

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
