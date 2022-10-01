import React from 'react';
import { View } from 'react-native';
import PopupButton from './PopupButton';

const Popup = () => {
  return (
    <View
      style={{
        position: 'absolute',
        right: 0,
        top: 25,
        zIndex: 13, // works on ios
        elevation: 13, // works on android
        height: 100,
      }}
    >
      <PopupButton label="Add" pressHandler={() => {}} />
      <PopupButton label="Edit" pressHandler={() => {}} />
      <PopupButton label="Delete" pressHandler={() => {}} />
    </View>
  );
};

export default Popup;
