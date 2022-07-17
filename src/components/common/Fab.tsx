import React from 'react';
import { View } from 'react-native';
//Components
import Button from './Button';

interface Props {
  label: string;
  pressHandler: () => void;
}

const Fab: React.FC<Props> = ({ label, pressHandler }) => {
  return (
    <View
      style={{
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
      }}
    >
      <Button label={label} pressHandler={pressHandler} />
    </View>
  );
};

export default Fab;
