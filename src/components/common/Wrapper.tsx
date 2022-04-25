import React from 'react';
import { View } from 'react-native';

const Wrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <View style={{ width: '90%', alignItems: 'center' }}>{children}</View>;
};

export default Wrapper;
