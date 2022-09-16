import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  pressHandler: () => void;
  icon: string;
}

const IconButton: React.FC<Props> = ({ pressHandler, icon }): JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={pressHandler}>
      <Icon name={icon} size={35} color="#5E6C89" />
    </TouchableOpacity>
  );
};

export default IconButton;
