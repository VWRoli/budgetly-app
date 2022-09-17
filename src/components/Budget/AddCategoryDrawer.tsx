import React, { useState } from 'react';
import { View } from 'react-native';
import { categoryType } from '../../types/categoryType';
import Button from '../common/Button';
import CardWrapper from '../common/CardWrapper';
import InputSecondary from '../common/InputSecondary';

const AddCategoryDrawer = () => {
  const [title, setTitle] = useState('');

  const handleCreate = () => {
    console.log(title);
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
        />
      </View>
    </View>
  );
};

export default AddCategoryDrawer;
