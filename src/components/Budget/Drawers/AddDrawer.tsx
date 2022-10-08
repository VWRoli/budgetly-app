import React, { useState } from 'react';
import { View } from 'react-native';
import { createCategory } from '../../../actions/budget';
import { useBudgetsContext } from '../../../context/BudgetsContext';
//Components
import Button from '../../common/Button';
import InputSecondary from '../../common/InputSecondary';

interface Props {
  onClose: () => void;
  isBudget?: boolean;
}
const AddCategoryDrawer: React.FC<Props> = (props) => {
  const [title, setTitle] = useState('');
  const { defaultBudget, state, dispatch } = useBudgetsContext();

  const handleCreate = async () => {
    if (props.isBudget) {
    } else {
      const newCategory = {
        title,
        budgeted: 0,
        available: 0,
        budgetId: defaultBudget!._id,
      };
      createCategory(dispatch, newCategory);
    }
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
        <InputSecondary
          placeholder="Title"
          fullWidth
          value={title}
          changeHandler={setTitle}
        />
        <Button
          label={`${props.isBudget ? 'Add budget item' : 'Add category'}`}
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
