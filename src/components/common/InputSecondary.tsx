import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';

interface Props {
  placeholder: string;
  styles?: { [key: string]: string | number };
  fullWidth?: boolean;
  value: string | number;
  changeHandler: (text: any) => void;
  keyboardType?: KeyboardTypeOptions;
  editable: boolean;
  onBlur?: () => void;
}

const InputSecondary: React.FC<Props> = (props): JSX.Element => {
  return (
    <TextInput
      maxLength={40}
      editable={props.editable}
      placeholder={props.placeholder}
      value={props.value + ''} //to accept numbers too
      onChangeText={(text) => props.changeHandler(text)}
      onBlur={props.onBlur}
      keyboardType={props.keyboardType}
      style={{
        borderColor: '#06B3C4',
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        width: props.fullWidth ? '100%' : 'auto',
        opacity: props.editable ? 1 : 0.5,
        ...props.styles,
      }}
    />
  );
};

export default InputSecondary;
