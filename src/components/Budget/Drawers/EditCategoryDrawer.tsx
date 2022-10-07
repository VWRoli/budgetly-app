import React, { useState } from 'react';
import { View } from 'react-native';
import { categoryType } from '../../../types/categoryType';
import { editCategory } from '../../../actions/budget';
import { useBudgetsContext } from '../../../context/BudgetsContext';
//Components
import Button from '../../common/Button';
import InputSecondary from '../../common/InputSecondary';

interface Props {
  category: categoryType;
  onClose: () => void;
}

const EditCategoryDrawer: React.FC<Props> = (props) => {
  const { state, dispatch } = useBudgetsContext();
  const [title, setTitle] = useState(props.category.title);

  const handleEdit = async (title: string) => {
    const newCategory = {
      title,
    };
    editCategory(dispatch, newCategory, props.category._id);
  };

  return (
    <View style={{ width: '100%' }}>
      <View style={{ marginHorizontal: 10 }}>
        <InputSecondary
          placeholder="Title"
          fullWidth
          value={title}
          changeHandler={setTitle}
        />
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
          <Button
            label="Edit category"
            pressHandler={() => {
              handleEdit(title);
              props.onClose();
            }}
            width="100%"
            slim
            disabled={!title || state.loading}
          />
        </View>
      </View>
    </View>
  );
};

export default EditCategoryDrawer;
