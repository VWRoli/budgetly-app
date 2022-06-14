import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  value: string;
  changeHandler: Dispatch<SetStateAction<string>>;
  placeholder: string;
  secureTextEntry?: boolean;
  icon: string;
}

const Input: React.FC<Props> = ({
  value,
  changeHandler,
  secureTextEntry,
  placeholder,
  icon,
}): JSX.Element => {
  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name={icon} size={20} color="#8B8C9E" />
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={changeHandler}
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
