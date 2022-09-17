import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}
    >
      <ActivityIndicator size="large" color="#06B3C4" />
    </View>
  );
};

export default Loading;
