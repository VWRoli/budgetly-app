import React from 'react';
import { StyleSheet, View } from 'react-native';
import BudgetItem from '../components/Budget/BudgetItem';
//Components
import MainCard from '../components/MainCard';

const BudgetDetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* <MainCard /> */}
      <View style={{ marginTop: 35, width: '85%' }}>
        <BudgetItem />
        <BudgetItem />
        <BudgetItem />
      </View>
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
