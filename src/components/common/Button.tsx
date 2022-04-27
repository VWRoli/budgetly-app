import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  label: string;
  pressHandler: () => void;
}

const Button: React.FC<Props> = ({ label, pressHandler }): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={pressHandler}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#06B3C4',
    borderRadius: 15,
    paddingVertical: 18,
    width: '90%',
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 0.4,
  },
});

export default Button;
