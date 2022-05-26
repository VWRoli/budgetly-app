import React from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  children: React.ReactNode;
  size?: number;
  bgColor?: string;
  pressHandler: () => void;
}
const CircularIcon: React.FC<Props> = ({
  children,
  size = 20,
  bgColor = '#06B3C4',
  pressHandler,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        height: size,
        width: size,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      }}
      onPress={pressHandler}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CircularIcon;
