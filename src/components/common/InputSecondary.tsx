import React from 'react';
import { TextInput } from 'react-native';

interface Props {
  placeholder: string;
  styles?: { [key: string]: string | number };
  fullWidth?: boolean;
}

const InputSecondary: React.FC<Props> = (props): JSX.Element => {
  return (
    <TextInput
      editable
      maxLength={40}
      placeholder={props.placeholder}
      style={{
        borderColor: '#06B3C4',
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        width: props.fullWidth ? '100%' : 'auto',
        ...props.styles,
      }}
    />
  );
};

export default InputSecondary;
