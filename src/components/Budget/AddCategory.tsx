import React from 'react';
import { View } from 'react-native';
import Button from '../common/Button';
//Components
import CardWrapper from '../common/CardWrapper';
import InputSecondary from '../common/InputSecondary';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategory: React.FC<Props> = ({ setIsOpen }): JSX.Element => {
  return (
    <CardWrapper>
      <View style={{ width: '100%' }}>
        <InputSecondary placeholder="Budget Item" />
        <InputSecondary placeholder="Category items" />
        <Button label="Add Item" pressHandler={() => setIsOpen(false)} slim />
      </View>
    </CardWrapper>
  );
};

export default AddCategory;
