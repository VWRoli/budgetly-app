import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BASE_URL } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { categoryType } from '../types/categoryType';
//Components
import CategoryCard from '../components/CategoryCard';
import CustomText from '../components/common/CustomText';
import MainCard from '../components/MainCard';
import SkeletonCategoryCard from '../components/Skeletons/SkeletonCategoryCard';
import BudgetItem from '../components/Budget/BudgetItem';
import { budgetItemType } from '../types/budgetItemType';

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
        {budgetItemsData.map((b: budgetItemType) => (
          <BudgetItem item={b} />
        ))}
      </View>

      {/* <View style={styles.categoryWrapper}>
        <CustomText text="Categories" styles={{ marginVertical: 10 }} />
        {isLoading ? (
          <>
            <SkeletonCategoryCard />
            <SkeletonCategoryCard />
          </>
        ) : (
          categoryData.map((category: categoryType) => (
            <CategoryCard
              key={category.id}
              category={category}
              isLoading={isLoading}
            />
          ))
        )}
      </View> */}
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
