import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  return (
    <View>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>
    </View>
  );
};

export default App;
