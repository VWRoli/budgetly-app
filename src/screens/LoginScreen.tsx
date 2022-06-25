import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Logo from '../assets/Logo';
import { useFormik } from 'formik';
import { useAuthContext } from '../context/AuthContext';
import { LoginSchema } from '../constants/LoginSchema';
//Components
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Link from '../components/common/Link';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Container from '../components/common/Container';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { signIn } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      // validationSchema: LoginSchema,
      initialValues: { username: '', email: '', password: '' },
      onSubmit: async (values) => {
        // setIsLoading(true);
        // const res = await api.signUp(values);

        // if (res) {
        //   navigation.navigate('Success');
        signIn();
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
        <HeaderText text="Login" />
      </View>
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
          justifyContent: 'flex-end',
          width: '85%',
          paddingVertical: 15,
        }}
      >
        {isLoading ? (
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large" color="#06B3C4" />
          </View>
        ) : (
          <Link
            text="Forgot password?"
            pressHandler={() => navigation.navigate('Reminder')}
          />
        )}
      </View>
      <Button label="Login" pressHandler={handleSubmit} disabled={isLoading} />
      {isLoading || (
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <CustomText text="New to budgetly?" styles={{ marginRight: 5 }} />
          <Link
            text="Register"
            pressHandler={() => navigation.navigate('Signup')}
          />
        </View>
      )}
    </Container>
  );
};

export default LoginScreen;
