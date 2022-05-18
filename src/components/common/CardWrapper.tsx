import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const CardWrapper: React.FC<Props> = ({ children }): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    borderColor: '#eee',
    borderWidth: 2,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CardWrapper;
