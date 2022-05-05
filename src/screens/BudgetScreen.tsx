import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
//Components
import MainCard from '../components/MainCard';

const BudgetScreen: React.FC = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F4F9F5',
        paddingTop: 35,
      }}
    >
      <MainCard />
    </View>
  );
};

export default BudgetScreen;
