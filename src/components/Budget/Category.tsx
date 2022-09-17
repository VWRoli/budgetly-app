import React, { useState } from 'react';
import { View } from 'react-native';
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
  const [isOpen, setisOpen] = useState(false);
  return (
    <View>
      <CategoryHeader title={category.title} setIsOpen={onOpen} />

      {category?.budgetItems?.map((b: budgetItemType) => (
        <BudgetItem key={b.id} item={b} />
      ))}
    </View>
  );
};

export default Category;
