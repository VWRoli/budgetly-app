import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  pressHandler: () => void;
  styles?: { [key: string]: string | number };
}

const Link: React.FC<Props> = ({ text, pressHandler, styles }): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={pressHandler}>
      <Text
        style={{
          color: '#1D3777',
          fontSize: 16,
          fontWeight: 'bold',
          ...styles,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
