import React from 'react';
import { View } from 'react-native';

const Container = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <View style={{ width: '90%', alignItems: 'center' }}>{children}</View>;
};

export default Container;
