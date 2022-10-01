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
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: '#8B8C9E',
        borderBottomWidth: 1,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          fontWeight: '500',
          color: label === 'Delete' ? '#C42610' : '',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PopupButton;
