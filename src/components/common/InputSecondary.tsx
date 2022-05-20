import React from 'react';
import { TextInput } from 'react-native';

interface Props {
  placeholder: string;
  styles?: { [key: string]: string | number };
}

const InputSecondary: React.FC<Props> = ({
  placeholder,
  styles,
}): JSX.Element => {
  return (
    <TextInput
      editable
      maxLength={40}
      placeholder={placeholder}
      style={{
        borderColor: '#06B3C4',
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        ...styles,
      }}
    />
  );
};

export default InputSecondary;
