import React from 'react';
import { View } from 'react-native';
import { CategoryHeaderProps } from '../CategoryHeader';
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
          props.handlers.handleAddPress();
        }}
      />
      <PopupButton
        label="Edit"
        pressHandler={() => {
          props.onClose();
          props.handlers.handleEditPress(props.category);
        }}
      />
      <PopupButton
        label="Delete"
        pressHandler={() => {
          props.onClose();
          props.handlers.handleDeletePress(props.category);
        }}
      />
    </View>
  );
};

export default Popup;
