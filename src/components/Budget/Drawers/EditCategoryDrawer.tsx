import React, { useState } from 'react';
import { View } from 'react-native';
import { categoryType } from '../../../types/categoryType';
import Button from '../../common/Button';
import CustomText from '../../common/CustomText';
import InputSecondary from '../../common/InputSecondary';

interface Props {
  category: categoryType;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  isLoading: boolean;
}

const EditCategoryDrawer: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.category.title);

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
              // handleCreate();
              // props.onClose();
            }}
            width="100%"
            slim
            //disabled={!title || props.isLoading}
          />
          <CustomText text="or" />
          <Button
            label="Delete category"
            pressHandler={() => {
              // handleCreate();
              // props.onClose();
            }}
            width="100%"
            slim
            error
            //disabled={!title || props.isLoading}
          />
        </View>
      </View>
    </View>
  );
};

export default EditCategoryDrawer;
