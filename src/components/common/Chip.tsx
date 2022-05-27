import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { chipColors } from '../../constants/constants';
import { rng } from '../../utils/helpers';

interface Props {
  value: string | React.ReactNode;
  icon?: string;
  textColor?: string;
  outline?: boolean;
}
const Chip: React.FC<Props> = ({ value, icon, outline }): JSX.Element => {
  const randomBgColor = chipColors[rng()];

  return (
    <View
      style={{
        borderRadius: 25,
        backgroundColor: outline ? '#fff' : randomBgColor,
        borderColor: randomBgColor,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
        flexDirection: 'row',
      }}
    >
      <MaterialCommunityIcons
        name={icon || 'web'}
        size={20}
        color={randomBgColor === '#06B3C4' ? '#fff' : '#1D3777'}
        style={{ marginRight: 5 }}
      />
      <Text
        style={{
          textAlign: 'center',
          color: randomBgColor === '#06B3C4' ? '#fff' : '#1D3777',
          fontWeight: 'bold',
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Chip;
