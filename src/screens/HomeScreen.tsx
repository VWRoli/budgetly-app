import React from 'react';
import { View } from 'react-native';
import Logo from '../assets/Logo';
//Components
import Button from '../components/common/Button';
import Link from '../components/common/Link';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Wrapper from '../components/common/Wrapper';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 35,
        backgroundColor: '#fff',
      }}
    >
      <View></View>
      <Wrapper>
        <Logo />
        <HeaderText
          text="Simplify your finances..."
          styles={{ marginVertical: 15 }}
        />
        <CustomText text="Keep track of your money simply and efficiently!" />
      </Wrapper>

      <Wrapper>
        <Button
          label="Register Now"
          pressHandler={() => navigation.navigate('Signup')}
        />
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <CustomText
            text="Already have an acccount?"
            styles={{ marginRight: 5 }}
          />
          <Link
            text="Log In"
            pressHandler={() => navigation.navigate('Login')}
          />
        </View>
      </Wrapper>
    </View>
  );
};

export default HomeScreen;
