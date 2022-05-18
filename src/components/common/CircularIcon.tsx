import React from 'react';
import { View } from 'react-native';

interface Props {
  children: React.ReactNode;
  size?: number;
  bgColor?: string;
}
const CircularIcon: React.FC<Props> = ({
  children,
  size = 35,
  bgColor = '#06B3C4',
}): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        height: size,
        width: size,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default CircularIcon;
