import React from 'react';
import { View } from 'react-native';
//Components
import Button from './Button';
import CustomText from './CustomText';

interface Props {
  text: string;
  btnLabel: string;
  pressHandler: () => void;
}
const EmptyScreen: React.FC<Props> = ({ text, btnLabel, pressHandler }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CustomText text={text} styles={{ margin: 20, textAlign: 'center' }} />
      <Button label={btnLabel} pressHandler={pressHandler} />
    </View>
  );
};

export default EmptyScreen;
