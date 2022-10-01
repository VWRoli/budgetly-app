import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  label: string;
  pressHandler: () => void;
  slim?: boolean;
  disabled?: boolean;
  width?: string;
  type?: 'primary' | 'secondary' | 'error' | 'outlined';
}

const Button: React.FC<Props> = ({
  label,
  pressHandler,
  slim,
  disabled,
  width = '90%',
  type = 'primary',
}): JSX.Element => {
  const getTypeStyles = () => {
    switch (type) {
      case 'secondary':
        return styles.secondary;
      case 'error':
        return styles.error;
      case 'outlined':
        return styles.outlined;
      default:
        return styles.primary;
    }
  };
  const typeStyles = getTypeStyles();

  const disabledStyles = disabled ? styles.disabled : styles.notDisabled;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...typeStyles,
        ...disabledStyles,
        paddingVertical: slim ? 8 : 18,
        width,
        borderWidth: type === 'outlined' ? 1 : 0,
        borderColor: type === 'outlined' ? '#06B3C4' : '',
      }}
      activeOpacity={0.7}
      onPress={pressHandler}
      disabled={disabled}
    >
      <Text
        style={{
          ...styles.text,
          ...typeStyles,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 15,
  },
  primary: {
    backgroundColor: '#06B3C4',
    color: '#fff',
  },
  secondary: { backgroundColor: '#e2e2e2', color: '#1D3777' },
  error: { backgroundColor: '#C42610', color: '#fff' },
  disabled: {
    opacity: 0.5,
  },
  notDisabled: {
    opacity: 1,
  },
  outlined: {
    backgroundColor: 'transparent',
    color: '#1D3777',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.4,
  },
});

export default Button;
