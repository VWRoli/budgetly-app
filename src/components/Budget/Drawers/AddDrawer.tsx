import React, { useState } from 'react';
import { View } from 'react-native';
import { createBudgetItem, createCategory } from '../../../actions/budget';
import { useBudgetsContext } from '../../../context/BudgetsContext';
//Components
import Button from '../../common/Button';
import InputSecondary from '../../common/InputSecondary';

interface Props {
  onClose: () => void;
  categoryId?: string;
}
const AddCategoryDrawer: React.FC<Props> = (props) => {
  const [title, setTitle] = useState('');
  const { state, dispatch } = useBudgetsContext();

  const handleCreate = async () => {
    if (props.categoryId) {
      const newBudgetItem = {
        title,
        budgeted: 0,
        balance: 0,
        categoryId: props.categoryId,
      };

      createBudgetItem(dispatch, newBudgetItem);
    } else {
      const newCategory = {
        title,
        budgeted: 0,
        balance: 0,
        budgetItems: [],
        budgetId: state.defaultBudget!._id,
        createdAt: '',
        updatedAt: '',
      };

      createCategory(dispatch, newCategory);
    }
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
        <InputSecondary
          editable
          placeholder="Title"
          fullWidth
          value={title}
          changeHandler={setTitle}
        />
        <Button
          label={`${props.categoryId ? 'Add budget item' : 'Add category'}`}
          pressHandler={() => {
            handleCreate();
            props.onClose();
          }}
          width="100%"
          slim
          disabled={!title || state.loading}
        />
      </View>
    </View>
  );
};

export default AddCategoryDrawer;
