import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BudgetItem from '../components/Budget/BudgetItem';
//Components
import MainCard from '../components/MainCard';

const BudgetDetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <MainCard />
      <BudgetItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f7f7',
    paddingTop: 35,
  },
  backButton: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
});

export default BudgetDetailScreen;
