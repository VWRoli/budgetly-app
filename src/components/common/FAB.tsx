import React from 'react';
import { View } from 'react-native';
import IconButton, { IconButtonProps } from './IconButton';

interface Props extends IconButtonProps {}

const FAB: React.FC<Props> = ({ pressHandler, icon, type, size }) => {
  return (
    <View style={{ position: 'absolute', bottom: 25, right: 25 }}>
      <IconButton
        type={type}
        icon={icon}
        pressHandler={pressHandler}
        size={size}
      />
    </View>
  );
};

export default FAB;
