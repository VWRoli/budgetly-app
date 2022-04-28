import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  pressHandler: () => void;
}

const BackButton: React.FC<Props> = ({ pressHandler }): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={pressHandler}>
      <Icon name="arrow-back" size={35} color="#5E6C89" />
    </TouchableOpacity>
  );
};

export default BackButton;
