import React from 'react';
import { View } from 'react-native';
import Button from '../common/Button';
import CardWrapper from '../common/CardWrapper';
import InputSecondary from '../common/InputSecondary';

const AddCategoryDrawer = () => {
  return (
    <View style={{ width: '100%' }}>
      <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
        <InputSecondary placeholder="Budget Item" fullWidth />
        <InputSecondary placeholder="Category items" fullWidth />
        <Button
          label="Add category"
          pressHandler={() => {}}
          width="100%"
          slim
        />
      </View>
    </View>
  );
};

export default AddCategoryDrawer;
