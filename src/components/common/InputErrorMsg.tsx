import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  msg: string;
}

const InputErrorMsg: React.FC<Props> = ({ msg }): JSX.Element => {
  return (
    <View style={{ flexDirection: 'row', width: '90%' }}>
      <Icon name="error-outline" size={15} color="#CC3333" />
      <Text
        style={{
          fontSize: 12,
          textAlign: 'left',
          color: '#CC3333',
          marginLeft: 5,
        }}
      >
        {msg}
      </Text>
    </View>
  );
};

export default InputErrorMsg;
