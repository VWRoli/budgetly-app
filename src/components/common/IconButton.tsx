import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  pressHandler: () => void;
  icon: string;
  type: 'primary' | 'secondary';
  size?: number;
}

const IconButton: React.FC<Props> = ({
  pressHandler,
  icon,
  type,
  size = 20,
}): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={pressHandler}
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor: type === 'primary' ? '#06B3C4' : 'transparent',
      }}
    >
      <Icon
        name={icon}
        size={20}
        color={`${type === 'primary' ? '#fff' : '#5E6C89'}`}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
