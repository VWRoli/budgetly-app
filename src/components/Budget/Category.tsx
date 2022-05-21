import React from 'react';
import { View } from 'react-native';
import { BASE_URL, skeletonArray } from '../../constants/constants';
import { useFetch } from '../../hooks/useFetch';
import { budgetItemType } from '../../types/budgetItemType';
import { categoryType } from '../../types/categoryType';
import SkeletonBudgetItem from '../Skeletons/SkeletonBudgetItem';
import BudgetItem from './BudgetItem';
import CategoryHeader from './CategoryHeader';

interface Props {
  category: categoryType;
}

const Category: React.FC<Props> = ({ category }): JSX.Element => {
  const {
    data: budgetItemsData,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}categories/${category.id}/budgetItems`);

  return (
    <View>
      <CategoryHeader title={category.title} />
      {isLoading
        ? skeletonArray.map((el) => <SkeletonBudgetItem key={el} />)
        : budgetItemsData?.map((b: budgetItemType) => (
            <BudgetItem key={b.id} item={b} />
          ))}
    </View>
  );
};

export default Category;
