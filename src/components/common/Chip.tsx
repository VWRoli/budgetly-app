import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  value: string;
}
const Chip: React.FC<Props> = ({ value }): JSX.Element => {
  return (
    <View
      style={{
        borderRadius: 25,
        backgroundColor: '#06B3C4',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
        alignSelf: 'flex-start',
      }}
    >
      <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
        {value}
      </Text>
    </View>
  );
};

export default Chip;
