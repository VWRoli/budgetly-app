import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import BudgetItem from '../components/Budget/BudgetItem';
//Components
import MainCard from '../components/MainCard';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { budgetItemType } from '../types/budgetItemType';

const BudgetDetailScreen = ({ route }: { route: any }) => {
  const {
    data: budgetItems,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}categories/${route.params.id}/budgetItems`);
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={styles.container}
    >
      {/*todo some summary card <MainCard /> */}
      <View style={{ marginTop: 35, width: '85%' }}>
        {budgetItems.map((item: budgetItemType) => (
          <BudgetItem key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
