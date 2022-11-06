import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  value: string | React.ReactNode;
  icon?: string;
  textColor?: string;
}
const Chip: React.FC<Props> = ({ value, icon, textColor }): JSX.Element => {
  return (
    <View
      style={{
        borderRadius: 25,
        backgroundColor: '#fff',
        borderColor: '#06B3C4',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 5,
        flexDirection: 'row',
      }}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon || 'web'}
          size={20}
          style={{ marginRight: 5 }}
        />
      )}

      <Text
        style={{
          textAlign: 'center',
          color: textColor,
          fontWeight: 'bold',
        }}
      >
        {textColor === 'red' ? `-${value}` : value}
      </Text>
    </View>
  );
};

export default Chip;
