import React from 'react';
//Components
import { View } from 'react-native';
import { Text } from 'react-native';

const BudgetScreen: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Text>Budget!</Text>
    </View>
  );
};

export default BudgetScreen;
