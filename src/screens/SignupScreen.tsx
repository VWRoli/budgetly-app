import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Logo from '../assets/Logo';
import * as api from '../api';
import { useFormik } from 'formik';
import { SignupSchema } from '../constants/SignupSchema';
//Components
import HeaderText from '../components/common/HeaderText';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import CustomText from '../components/common/CustomText';
import Link from '../components/common/Link';
import Container from '../components/common/Container';
import { useAuthContext } from '../context/AuthContext';

//todo navigation type
const SignupScreen = ({ navigation }: { navigation: any }) => {
  const { signUp } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      //validationSchema: SignupSchema,
      initialValues: { username: '', email: '', password: '' },
      onSubmit: async (values) => {
        // setIsLoading(true);
        // const res = await api.signUp(values);

        // if (res) {
        //   navigation.navigate('Success');
        signUp();
        // }

        // setIsLoading(false);
      },
    },
  );

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
        editable={!isLoading}
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
        editable={!isLoading}
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
