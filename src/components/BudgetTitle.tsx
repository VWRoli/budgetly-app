import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const BudgetCategory = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>Bills</Text>
      <Text>Available</Text>
    </View>
  );
};

export default BudgetCategory;
