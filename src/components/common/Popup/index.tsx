import React from 'react';
import { View } from 'react-native';
import { CategoryHeaderProps } from '../../Budget/CategoryHeader';
//Components
import PopupButton from './PopupButton';
interface Props extends CategoryHeaderProps {
  onClose: () => void;
}

const Popup: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        position: 'absolute',
        right: 0,
        top: 25,
        zIndex: 13, // works on ios
        elevation: 13, // works on android
        borderRadius: 10,
        backgroundColor: '#fff',
      }}
    >
      <PopupButton
        label="Add"
        pressHandler={() => {
          props.onClose();
          props.handleAddPress();
        }}
      />
      <PopupButton
        label="Edit"
        pressHandler={() => {
          props.onClose();
          props.handleEditPress();
        }}
      />
      <PopupButton
        label="Delete"
        pressHandler={() => {
          props.onClose();
          props.handleDeletePress();
        }}
      />
    </View>
  );
};

export default Popup;
