import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BASE_URL, skeletonArray } from '../constants/constants';
import { useFetch } from '../hooks/useFetch';
import { budgetItemType } from '../types/budgetItemType';
//Components
import BudgetItem from '../components/Budget/BudgetItem';
import CategoryCard from '../components/CategoryCard';
import SkeletonItemCard from '../components/Skeletons/SkeletonItemCard';
import SkeletonCategoryCard from '../components/Skeletons/SkeletonCategoryCard';

const BudgetDetailScreen = ({ route }: { route: any }) => {
  const {
    data: category,
    isLoading: isLoadingCategory,
    isError: isErrorCategory,
  } = useFetch(`${BASE_URL}categories/${route.params.id}`);
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
      <View style={styles.categoryWrapper}>
        {isLoadingCategory ? (
          <>
            <SkeletonCategoryCard />
          </>
        ) : (
          <CategoryCard
            key={category.id}
            category={category}
            isLoading={isLoading}
          />
        )}
      </View>
      <View style={styles.itemsWrapper}>
        {isLoading
          ? skeletonArray.map((_, i) => <SkeletonItemCard key={i} />)
          : budgetItems.map((item: budgetItemType) => (
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
  },

  itemsWrapper: { marginTop: 35, width: '85%' },
  categoryWrapper: { width: '85%' },
});

export default BudgetDetailScreen;
