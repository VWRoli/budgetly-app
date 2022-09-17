import React, { useState } from 'react';
import { View } from 'react-native';
import * as api from '../../api';
//Components
import Button from '../common/Button';
import InputSecondary from '../common/InputSecondary';

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  isLoading: boolean;
}
const AddCategoryDrawer: React.FC<Props> = (props) => {
  const [title, setTitle] = useState('');

  const handleCreate = async () => {
    props.setLoading(true);
    const newCategory = {
      title,
      budgeted: 0,
      available: 0,
    };
    try {
      await api.createCategory(newCategory);
      props.setLoading(false);
      props.onClose();
    } catch (error) {
      props.setLoading(false);
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
          label="Add category"
          pressHandler={handleCreate}
          width="100%"
          slim
          disabled={!title || props.isLoading}
        />
      </View>
    </View>
  );
};

export default AddCategoryDrawer;
