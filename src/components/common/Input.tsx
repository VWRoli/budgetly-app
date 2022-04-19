import React from 'react';
import { TextInput } from 'react-native-paper';

interface Props {
  value: string;
  label: string;
  changeHandler: () => void;
}

const Input: React.FC<Props> = ({
  value,
  changeHandler,
  label,
}): JSX.Element => {
  return (
    <TextInput
      theme={{ roundness: 5 }}
      style={{ width: '60%', marginVertical: 5 }}
      label={label}
      value={value}
      mode="outlined"
      onChangeText={changeHandler}
    />
  );
};

export default Input;
