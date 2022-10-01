import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  label: string;
  pressHandler: () => void;
}
const PopupButton: React.FC<Props> = ({ label, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={{ backgroundColor: '#F8F4F4' }}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default PopupButton;
