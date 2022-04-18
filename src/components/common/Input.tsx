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
      theme={{ roundness: 10 }}
      style={{ width: '60%', borderRadius: 10 }}
      label={label}
      value={value}
      mode="outlined"
      onChangeText={changeHandler}
    />
  );
};

export default Input;
