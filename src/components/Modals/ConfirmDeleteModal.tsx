import React from 'react';
import { View } from 'react-native';
import * as api from '../../api';
import { categoryType } from '../../types/categoryType';
//Components
import Button from '../common/Button';
import CustomText from '../common/CustomText';

interface Props {
  category: categoryType;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const ConfirmDeleteModal: React.FC<Props> = (props) => {
  const handleDelete = async (id?: string) => {
    props.setLoading(true);

    try {
      await api.deleteCategory(id);
      props.setLoading(false);
    } catch (error) {
      props.setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <CustomText
        text="Are you sure you want to delete this category and all of it's content?"
        styles={{ textAlign: 'center' }}
      />
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <Button
          label="Cancel"
          pressHandler={() => props.setModalVisible(false)}
          slim
          type="secondary"
          width="45%"
        />
        <View style={{ width: 10 }}></View>
        <Button
          label="Delete"
          pressHandler={() => {
            props.setModalVisible(false);
            handleDelete(props.category._id);
          }}
          slim
          type="error"
          width="45%"
        />
      </View>
    </View>
  );
};

export default ConfirmDeleteModal;
