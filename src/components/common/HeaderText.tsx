import React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
  styles?: { [key: string]: string | number };
}

const HeaderText: React.FC<Props> = ({ text, styles }): JSX.Element => {
  return (
    <Text
      style={{
        color: '#1D3777',
        fontSize: 32,
        fontWeight: 'bold',
        ...styles,
      }}
    >
      {text}
    </Text>
  );
};

export default HeaderText;
