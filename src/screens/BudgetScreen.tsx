import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BASE_URL, skeletonArray } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { budgetItemType } from '../types/budgetItemType';
//Components
import SkeletonBudgetItem from '../components/Skeletons/SkeletonBudgetItem';
import MainCard from '../components/MainCard';
import BudgetItem from '../components/Budget/BudgetItem';

const BudgetScreen: React.FC = (): JSX.Element => {
  const {
    data: budgetItemsData,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}users/1/budgetItems`);

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={styles.container}
    >
      <View style={styles.mainCardWrapper}>
        <MainCard />
      </View>
      <View style={styles.categoryWrapper}>
        {isLoading
          ? skeletonArray.map((el) => <SkeletonBudgetItem key={el} />)
          : budgetItemsData.map((b: budgetItemType) => (
              <BudgetItem key={b.id} item={b} />
            ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f7f7',
  },
  mainCardWrapper: {
    marginTop: 35,
    width: '100%',
    alignItems: 'center',
  },
  categoryWrapper: { paddingTop: 35, width: '95%' },
});
export default BudgetScreen;
