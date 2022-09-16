import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
//Components
import CustomText from './CustomText';
import IconButton from './IconButton';

const MonthHeader: React.FC = (): JSX.Element => {
  const navigation = useNavigation();
  const { signOut } = useAuthContext();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}
    >
      <IconButton
        pressHandler={() => navigation.goBack()}
        icon="chevron-left"
      />
      <CustomText text="June" primary bold />
      <IconButton icon="exit-to-app" pressHandler={() => signOut()} />
    </View>
  );
};

export default MonthHeader;
