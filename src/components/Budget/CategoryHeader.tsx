import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { categoryType } from '../../types/categoryType';
//Components
import CustomText from '../common/CustomText';
import HeaderText from '../common/HeaderText';
import IconButton from '../common/IconButton';
import Popup from '../common/Popup';

export interface CategoryHeaderProps {
  title: string;
  handleAddPress: () => void;
  handleEditPress: () => void;
  handleDeletePress: () => void;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = (props): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <HeaderText text={props.title} size={24} />
        <IconButton
          icon="plus"
          pressHandler={props.handleAddPress}
          type="primary"
        />
      </View>
      <CustomText text="Available" size={12} />
      <Icon
        name="dots-vertical"
        color="#8B8C9E"
        size={20}
        onPress={() => setisOpen((prev) => !prev)}
      />
      {isOpen && (
        <Popup
          title={props.title}
          onClose={() => setisOpen(false)}
          handleAddPress={props.handleAddPress}
          handleEditPress={props.handleEditPress}
          handleDeletePress={props.handleDeletePress}
        />
      )}
    </View>
  );
};

export default CategoryHeader;
