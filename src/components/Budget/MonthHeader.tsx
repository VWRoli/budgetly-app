import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuthContext } from '../../context/AuthContext';
//Components
import CustomText from '../common/CustomText';

const MonthHeader: React.FC = (): JSX.Element => {
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
      <TouchableOpacity activeOpacity={0.7}>
        <Icon name="chevron-left" size={28} color="#1D3777" />
      </TouchableOpacity>
      <CustomText text="June" primary bold />
      <TouchableOpacity activeOpacity={0.7} onPress={() => signOut()}>
        <Icon name="exit-to-app" size={28} color="#1D3777" />
      </TouchableOpacity>
    </View>
  );
};

export default MonthHeader;
