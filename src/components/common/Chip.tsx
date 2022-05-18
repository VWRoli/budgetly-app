import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  value: string;
  textColor?: string;
  outline?: boolean;
}
const Chip: React.FC<Props> = ({
  value,
  textColor = '#fff',
  outline,
}): JSX.Element => {
  return (
    <View
      style={{
        borderRadius: 25,
        backgroundColor: outline ? '#fff' : '#06B3C4',
        borderColor: '#06B3C4',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
        alignSelf: 'flex-start',
      }}
    >
      <Text
        style={{ textAlign: 'center', color: textColor, fontWeight: 'bold' }}
      >
        {value}
      </Text>
    </View>
  );
};

export default Chip;
