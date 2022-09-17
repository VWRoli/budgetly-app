import React, { useState } from 'react';
import { View } from 'react-native';
import { BASE_URL, skeletonArray } from '../../constants/constants';
import { useFetch } from '../../hooks/useFetch';
import { budgetItemType } from '../../types/budgetItemType';
import { categoryType } from '../../types/categoryType';
import SkeletonBudgetItem from '../Skeletons/SkeletonBudgetItem';
import AddCategory from './AddCategory';
import BudgetItem from './BudgetItem';
import CategoryHeader from './CategoryHeader';

const Category = ({ category }: { category: categoryType }): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <View>
      <CategoryHeader title={category.title} setIsOpen={setisOpen} />
      {isOpen && <AddCategory setIsOpen={setisOpen} />}
      {category.budgetItems.map((b: budgetItemType) => (
        <BudgetItem key={b.id} item={b} />
      ))}
    </View>
  );
};

export default Category;
