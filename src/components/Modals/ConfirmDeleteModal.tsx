import React from 'react';
import { View } from 'react-native';
//Components
import Button from '../common/Button';
import CustomText from '../common/CustomText';

interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => Promise<void>;
}
const ConfirmDeleteModal: React.FC<Props> = (props) => {
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
            props.handleDelete();
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
