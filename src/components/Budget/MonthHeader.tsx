import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CustomText from '../common/CustomText';

const MonthHeader: React.FC = (): JSX.Element => {
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
      <Icon name="chevron-left" size={28} color="#1D3777" />
      <CustomText text="June" primary bold />
      <Icon name="chevron-right" size={28} color="#f8f7f7" />
    </View>
  );
};

export default MonthHeader;
