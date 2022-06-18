import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  label: string;
  pressHandler: () => void;
  outlined?: boolean;
  slim?: boolean;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  label,
  pressHandler,
  outlined,
  slim,
  disabled,
}): JSX.Element => {
  const typeStyles = outlined ? styles.outlined : styles.filled;
  const disabledStyles = disabled ? styles.disabled : styles.notDisabled;
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...typeStyles,
        ...disabledStyles,
        paddingVertical: slim ? 8 : 18,
      }}
      activeOpacity={0.7}
      onPress={pressHandler}
      disabled={disabled}
    >
      <Text style={{ ...styles.text, color: outlined ? '#06B3C4' : '#fff' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 15,
    width: '90%',
  },
  filled: {
    backgroundColor: '#06B3C4',
  },
  disabled: {
    opacity: 0.5,
  },
  notDisabled: {
    opacity: 1,
  },
  outlined: {
    borderWidth: 1,
    borderColor: '#06B3C4',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.4,
  },
});

export default Button;
