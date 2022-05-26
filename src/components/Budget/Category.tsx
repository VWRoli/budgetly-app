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

interface Props {
  category: categoryType;
}

const Category: React.FC<Props> = ({ category }): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);
  const {
    data: budgetItemsData,
    isLoading,
    isError,
  } = useFetch(`${BASE_URL}categories/${category.id}/budgetItems`);

  return (
    <View>
      <CategoryHeader title={category.title} setIsOpen={setisOpen} />
      {isOpen && <AddCategory setIsOpen={setisOpen} />}

      {isLoading
        ? skeletonArray.map((el) => <SkeletonBudgetItem key={el} />)
        : budgetItemsData?.map((b: budgetItemType) => (
            <BudgetItem key={b.id} item={b} />
          ))}
    </View>
  );
};

export default Category;
