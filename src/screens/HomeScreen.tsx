import React from 'react';
import { View } from 'react-native';
//import { Button } from 'react-native-paper';
import Button from '../components/common/Button';
import Logo from '../assets/Logo';
import CustomText from '../components/common/CustomText';
import HeaderText from '../components/common/HeaderText';
import Container from '../components/common/Container';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 35,
      }}
    >
      <View></View>
      <Container>
        <Logo />
        <HeaderText
          text="Simplify your finances..."
          styles={{ marginVertical: 15 }}
        />
        <CustomText text="Keep track of your money simply and efficiently!" />
      </Container>

      <Container>
        <Button
          label="Register Now"
          pressHandler={() => navigation.navigate('Signup')}
        />
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <CustomText
            text="Already have an acccount?"
            styles={{ marginRight: 5 }}
          />
          <CustomText text="Sign In" primary bold />
        </View>
      </Container>
    </View>
  );
};

export default HomeScreen;
