import React from 'react';
import { View } from 'react-native';
import PopupButton from './PopupButton';
interface Props {
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
        }}
      />
      <PopupButton
        label="Edit"
        pressHandler={() => {
          props.onClose();
        }}
      />
      <PopupButton
        label="Delete"
        pressHandler={() => {
          props.onClose();
        }}
      />
    </View>
  );
};

export default Popup;
