import React from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
  primary?: boolean;
  bold?: boolean;
  styles?: { [key: string]: string | number };
}

const CustomText: React.FC<Props> = ({
  primary,
  text,
  bold,
  styles,
}): JSX.Element => {
  return (
    <Text
      style={{
        color: `${primary ? '#1D3777' : '#8B8C9E'}`,
        fontSize: 16,
        fontWeight: `${bold ? 'bold' : 'normal'}`,
        ...styles,
      }}
    >
      {text}
    </Text>
  );
};

export default CustomText;
