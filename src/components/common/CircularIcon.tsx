import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CircularIcon = () => {
  return (
    <View
      style={{
        backgroundColor: '#06B3C4',
        height: 35,
        width: 35,
        borderRadius: 35 / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons
        name="file-document-multiple-outline"
        size={20}
        color="#fff"
      />
    </View>
  );
};

export default CircularIcon;
