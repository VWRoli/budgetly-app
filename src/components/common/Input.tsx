import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  changeHandler: (e: string | React.ChangeEvent<any>) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  icon: string;
  error?: string;
  touched?: boolean;
  // All other props
  [x: string]: any;
}

const Input: React.FC<Props> = ({
  value,
  changeHandler,
  secureTextEntry,
  placeholder,
  icon,
  error,
  touched,
  ...otherProps
}): JSX.Element => {
  const validationColor = !touched ? '#ddd' : error ? '#ff4444' : '#00c851';
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor: validationColor,
        borderWidth: 1,
        marginVertical: 5,
      }}
    >
      <Icon style={styles.searchIcon} name={icon} size={20} color="#8B8C9E" />
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{ ...styles.input, borderColor: validationColor }}
        value={value}
        placeholder={placeholder}
        onChangeText={changeHandler}
        //editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 5,
  },
  disabled: {
    opacity: 0.5,
  },
  notDisabled: {
    opacity: 1,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#1D3777',
    width: '80%',
    marginVertical: 5,
    borderRadius: 15,
    fontSize: 16,
  },
});

export default Input;
