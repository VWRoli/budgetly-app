import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { budgetItemType } from '../../types/budgetItemType';
import { categoryType } from '../../types/categoryType';
//Components
import BudgetItem from './BudgetItem';
import CategoryHeader from './CategoryHeader';
interface Props {
  category: categoryType;
  onOpen: () => void;
}

const Category: React.FC<Props> = ({ category, onOpen }): JSX.Element => {
  return (
    <View style={styles.container}>
      <CategoryHeader title={category.title} setIsOpen={onOpen} />

      {category.budgetItems?.map((b: budgetItemType) => (
        <BudgetItem key={b.id} item={b} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F4F4',
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
});

export default Category;
