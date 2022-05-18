import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//Components
import CircularIcon from './CircularIcon';

const Fab = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.fab}>
      <CircularIcon size={45} bgColor="#1eff05">
        <Icon name="plus-thick" color="#fff" size={30} />
      </CircularIcon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    left: Dimensions.get('screen').width / 2 - 22.5,
    alignSelf: 'flex-end',
  },
});

export default Fab;
